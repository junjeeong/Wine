import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

type System = "system" | "dark" | "light";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  const resolvedTheme: "light" | "dark" | "system" = (theme as System) ?? "system"; // ✅ undefined 제거

  return (
    <Sonner
      theme={resolvedTheme} // ✅ 정확한 union 타입
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
