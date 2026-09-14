"use client";

import { NavLink } from "@/components/common/nav-link";
import {
  getSectionIdFromHref,
  useActiveSection,
} from "@/hooks/use-active-section";
import { NAV_ITEMS } from "@/lib/constants";

export function DesktopNav() {
  const { activeId, selectSection } = useActiveSection();

  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-5">
        {NAV_ITEMS.map((item) => {
          const sectionId = getSectionIdFromHref(item.href);

          return (
            <li key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                isActive={sectionId === activeId}
                onSelect={selectSection}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
