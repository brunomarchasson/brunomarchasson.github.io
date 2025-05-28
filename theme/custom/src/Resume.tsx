import React from "react";
import { ResumeSchema as ResumeProps } from "./types";
import { Sidebar } from "./Components/Sidebar ";
import { ResumeProvider } from "./resumeContext";
import { Main } from "./Components/Main";
import styles from "./resume.module.css";

export const Resume: React.FC<ResumeProps> = (resume: ResumeProps) => (
  <ResumeProvider value={resume}>
    <div className={"resume"}>
      <Sidebar />
      <Main />
    </div>
  </ResumeProvider>
);
