// components/ToggleThemeButton.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

type ButtonVariant =
  | "ghost"
  | "outline"
  | "default"
  | "destructive"
  | "secondary"
  | "link"
  | null
  | undefined;
type ButtonSize = "default" | "icon" | "sm" | "lg" | null | undefined;

interface ToggleThemeButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  variant,
  size,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button onClick={toggleTheme} variant={variant} size={size}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ToggleThemeButton;
