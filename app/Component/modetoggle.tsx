"use client"; // wajib! karena pakai hook

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hindari error hydration di Next.js
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg  transition"
    >
      {theme === "light" ? (
        <Sun size={15}/>
    ) : (
        <Moon size={15}/>
      )}
    </button>
  );
}
