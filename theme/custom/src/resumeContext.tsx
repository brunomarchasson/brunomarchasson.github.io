import React from "react";
import { ResumeSchema } from "./types";

const ResumeContext = React.createContext<ResumeSchema | undefined>(undefined);
export const ResumeProvider = ResumeContext.Provider;

export const useResume = () => {
  const context = React.useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}