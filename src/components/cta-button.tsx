import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "outline" | "solid";
};

export function CtaButton({ children, className, variant = "outline", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow-lg)] hover:-translate-y-0.5"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow-lg)] hover:-translate-y-0.5";
  return (
    <a className={cn(base, styles, className)} {...rest}>
      {children}
    </a>
  );
}
