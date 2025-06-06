import { I18nextProvider } from "react-i18next";
import { Resume } from "./Resume";
import resumeData from "./storyResume.json";
import { ResumeSchema } from "./types";
import { createI18N } from "./i18n";
import { ResumeProvider } from "./resumeContext";

export const App = ({ resume = resumeData }: { resume?: ResumeSchema }) => {
  return (
    <I18nextProvider i18n={createI18N("fr")}>
        <ResumeProvider value={resume}>
          <Resume />
        </ResumeProvider>
    </I18nextProvider>
  );
};
