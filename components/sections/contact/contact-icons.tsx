import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m4 7 8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8.5z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.2.69.81.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.5 2 2 6.37 2 11.7c0 1.97.6 3.8 1.64 5.32L2 22l5.16-1.6A10.2 10.2 0 0 0 12.04 21C17.6 21 22 16.63 22 11.3 22 6.97 17.58 2 12.04 2Zm5.3 14.4c-.22.62-1.28 1.15-1.78 1.22-.46.07-1.02.1-1.64-.1-.38-.12-.86-.28-1.48-.55-2.6-1.13-4.3-3.76-4.43-3.94-.13-.17-1.07-1.43-1.07-2.73s.67-1.93.91-2.2c.22-.25.49-.32.65-.32h.47c.15 0 .35-.06.55.42.22.5.74 1.82.8 1.95.07.13.1.28.02.45-.08.17-.12.28-.24.43-.12.15-.25.33-.36.45-.12.12-.24.25-.1.49.13.23.6 1 .1.28 1.73 1.64 2 .1.1.13.3.08.47-.07.17-.13.28-.25.45Z" />
    </svg>
  );
}
