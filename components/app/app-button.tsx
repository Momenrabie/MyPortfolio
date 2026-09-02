import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonProps = ComponentProps<typeof Button>;

export function AppButton({ className, size, ...props }: AppButtonProps) {
  return (
    <Button
      size={size}
      className={cn(size === "lg" && "h-11 px-6 text-base", className)}
      {...props}
    />
  );
}
