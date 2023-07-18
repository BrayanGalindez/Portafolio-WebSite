import { createContext, useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const getInitialTheme = (themeKey) => {
  const storedTheme = window.localStorage.getItem(themeKey);
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialLanguage = (languageKey) => {
  const storedLanguage = window.localStorage.getItem(languageKey);
  if (storedLanguage) {
    return storedLanguage;
  }
  const browserLanguage = navigator.language || "en";
  return browserLanguage.split("-")[0]; // Tomar solo el código del idioma sin la región
};

const useStorageTheme = (themeKey) => {
  const [theme, setTheme] = useState(getInitialTheme(themeKey));

  useEffect(() => {
    window.localStorage.setItem(themeKey, theme);
  }, [theme, themeKey]);

  return [theme, setTheme];
};

const useStorageLanguage = (languageKey) => {
  const [language, setLanguage] = useState(getInitialLanguage(languageKey));

  useEffect(() => {
    window.localStorage.setItem(languageKey, language);
  }, [language, languageKey]);

  return [language, setLanguage];
};

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
    console.log("toggle Theme");
  },
});

export const LanguageContext = createContext({
  language: "en",
  isEnglishMode: true,
  toggleLanguageMode: () => {},
  changeLanguage: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorageTheme("theme");
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const oldTheme = usePrevious(theme);

  useEffect(() => {
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(theme);
    setIsDarkMode(theme === "dark");
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useStorageLanguage("language");
  const [isEnglishMode, setIsEnglishMode] = useState(language === "en");
  const oldLanguage = usePrevious(language);

  useEffect(() => {
    document.documentElement.classList.remove(oldLanguage);
    document.documentElement.classList.add(language); // Cambia oldLanguage a language
    setIsEnglishMode(language === "en"); // Cambia "EN" a "en"
  }, [language, oldLanguage]);

  const toggleLanguageMode = () => {
    const newLanguage = isEnglishMode ? "es" : "en";
    setIsEnglishMode((prevMode) => !prevMode);
    setLanguage(newLanguage); // Actualizar el estado del idioma
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, isEnglishMode, toggleLanguageMode, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { ThemeProvider, LanguageProvider };
