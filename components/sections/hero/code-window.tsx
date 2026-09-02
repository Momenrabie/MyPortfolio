"use client";

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
  const visibleLines = sliceTokens(lines, visibleChars);
  const plainText = codeLinesToPlainText(lines);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 bg-primary/20 blur-3xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
        <div className="relative flex items-center border-b border-border px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-destructive" />
            <span className="size-3 rounded-full bg-muted-foreground" />
            <span className="size-3 rounded-full bg-accent" />
          </div>
          <p className="pointer-events-none absolute inset-x-0 text-center font-mono text-xs text-muted-foreground">
            {fileName}
          </p>
        </div>
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="relative">
            <div className="invisible" aria-hidden="true">
              <CodeLines lines={lines} />
            </div>
            <div className="absolute inset-0" aria-hidden="true">
              <CodeLines lines={visibleLines} showCursor />
            </div>
          </div>
          <pre className="sr-only">{plainText}</pre>
        </div>
      </div>
    </div>
  );
}

type CodeLinesProps = {
  lines: readonly CodeLine[];
  showCursor?: boolean;
};

function CodeLines({ lines, showCursor = false }: CodeLinesProps) {
  return (
    <pre className="font-mono text-sm leading-relaxed whitespace-pre">
      {lines.length === 0 && showCursor ? (
        <Cursor />
      ) : (
        lines.map((line, lineIndex) => {
          const isLast = lineIndex === lines.length - 1;

          return (
            <div key={lineIndex}>
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
            </div>
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
