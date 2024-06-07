"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

 const ThemeSwitcher =() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <>
      {theme === "light" ? (
        <>
          <button className="flex gap-2" onClick={() => setTheme("dark")}>
            <Moon />
            <p>Dark Mode</p>
          </button>
        </>
      ) : (
        <>
          <button className="flex gap-2" onClick={() => setTheme("light")}>
            <Sun />
            <p>Light Mode</p>
          </button>
        </>
      )}
    </>
  );
}
export default ThemeSwitcher