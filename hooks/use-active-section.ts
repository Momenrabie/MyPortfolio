"use client";

import { useCallback, useEffect, useState } from "react";

import { NAV_ITEMS } from "@/lib/constants";

export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.href.split("#")[1]).filter(
  (id): id is string => typeof id === "string" && id.length > 0,
);

export function getSectionIdFromHref(href: string) {
  return href.split("#")[1];
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState(NAV_SECTION_IDS[0] ?? "home");

  useEffect(() => {
    const hashId = window.location.hash.replace(/^#/, "");
    if (hashId && NAV_SECTION_IDS.includes(hashId)) {
      setActiveId(hashId);
    }

    const sections = NAV_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (sections.length === 0) {
      return;
    }

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let nextId = NAV_SECTION_IDS[0] ?? "home";
        let bestRatio = 0;

        for (const id of NAV_SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextId = id;
          }
        }

        if (bestRatio > 0) {
          setActiveId(nextId);
        }
      },
      {
        rootMargin: "-64px 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const selectSection = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  return { activeId, selectSection };
}
