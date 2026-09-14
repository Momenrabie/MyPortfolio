"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { AppButton } from "@/components/app/app-button";
import { useTypewriter } from "@/hooks/use-typewriter";
import {
  codeLinesToPlainText,
  countCodeChars,
  sliceTokens,
  type CodeLine,
  type CodeTokenKind,
} from "@/lib/content/hero";

const tokenClassName: Record<CodeTokenKind, string> = {
  keyword: "text-primary",
  string: "text-accent",
  comment: "text-muted-foreground",
  plain: "text-foreground",
};

type CodeWindowProps = {
  fileName: string;
  lines: readonly CodeLine[];
  durationMs: number;
};

export function CodeWindow({ fileName, lines, durationMs }: CodeWindowProps) {
  const totalChars = countCodeChars(lines);
  const { visibleChars } = useTypewriter(totalChars, durationMs);
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const visibleLines = sliceTokens(lines, visibleChars);
  const plainText = codeLinesToPlainText(lines);
  const command = `cat ${fileName}`;

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 bg-primary/20 blur-3xl"
      />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10"
        role="region"
        aria-label="Developer terminal"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border bg-secondary/60 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-destructive" />
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="size-2.5 rounded-full bg-primary" />
            </div>
            <p className="truncate font-mono text-xs text-muted-foreground">
              {fileName}
            </p>
          </div>
          <AppButton
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={copyCommand}
            aria-label={copied ? "Command copied" : "Copy terminal command"}
            className="shrink-0 text-muted-foreground"
          >
            {copied ? (
              <CheckIcon aria-hidden="true" />
            ) : (
              <CopyIcon aria-hidden="true" />
            )}
          </AppButton>
          <span className="sr-only" aria-live="polite">
            {copied ? "Command copied to clipboard." : ""}
          </span>
        </div>
        <div className="overflow-x-auto px-4 py-5 sm:px-6 sm:py-6">
          <p className="mb-4 min-w-max font-mono text-sm text-foreground">
            <span className="mr-2 text-primary" aria-hidden="true">
              $
            </span>
            {command}
          </p>
          <div className="relative">
            <div className="invisible" aria-hidden="true">
              <CodeLines lines={lines} />
            </div>
            <div className="absolute inset-0" aria-hidden="true">
              <CodeLines lines={visibleLines} showCursor />
            </div>
          </div>
          <pre className="sr-only">{`$ ${command}\n${plainText}`}</pre>
        </div>
      </motion.div>
    </div>
  );
}

type CodeLinesProps = {
  lines: readonly CodeLine[];
  showCursor?: boolean;
};

function CodeLines({ lines, showCursor = false }: CodeLinesProps) {
  return (
    <pre className="min-w-max font-mono text-sm leading-relaxed whitespace-pre">
      {lines.length === 0 && showCursor ? (
        <Cursor />
      ) : (
        lines.map((line, lineIndex) => {
          const isLast = lineIndex === lines.length - 1;

          return (
            <span key={lineIndex} className="block">
              {" ".repeat(line.indent)}
              {line.tokens.map((token, tokenIndex) => (
                <span
                  key={tokenIndex}
                  className={tokenClassName[token.kind]}
                >
                  {token.text}
                </span>
              ))}
              {showCursor && isLast ? <Cursor /> : null}
            </span>
          );
        })
      )}
    </pre>
  );
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-px bg-accent motion-safe:animate-pulse" />
  );
}
