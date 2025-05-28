import React from "react";
import { ResumeSchema } from "./types";

const ResumeContext = React.createContext<ResumeSchema>({});
export const ResumeProvider = ResumeContext.Provider;

export const useResume = () => {
  const context = React.useContext(ResumeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}