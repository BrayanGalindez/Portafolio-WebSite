import { ThemeProvider } from "./Context";
import { LanguageProvider } from "./Context";

const AppProviders = ({ children }) => {
    return (
      <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    );
  };
  
  export default AppProviders;