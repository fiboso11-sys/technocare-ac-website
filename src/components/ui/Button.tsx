import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[color-mix(in_srgb,var(--primary)_88%,black)] border-transparent",
  secondary:
    "bg-surface text-foreground hover:bg-muted border-border",
  dark: "bg-accent text-accent-foreground hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)] border-transparent",
  ghost:
    "bg-transparent text-hero-foreground hover:bg-white/10 border-white/25",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
