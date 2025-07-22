import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

type System = "system" | "dark" | "light";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  const resolvedTheme: "light" | "dark" | "system" =
    theme === undefined ? "system" : (theme as System);

  return (
    <Sonner
      theme={resolvedTheme as "light" | "dark" | "system"}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
