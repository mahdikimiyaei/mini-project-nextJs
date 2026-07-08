"use client";
import { IThemeContext, TTheme } from "@/types/TThemeContext.type"
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext<null | IThemeContext>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TTheme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: TTheme) => {
      const theme = prev === "light" ? "dark" : "light"
      localStorage.setItem("theme", theme)
      return theme;
    }
    )
  }

  const contextValue: IThemeContext = {
    theme,
    toggleTheme
  }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
