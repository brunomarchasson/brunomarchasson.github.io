import { ResumeSchema as ResumeProps } from "./types";
import { Sidebar } from "./Components/Sidebar ";
import { ResumeProvider } from "./resumeContext";
import { Basics } from './Components/Basics';
import { Education } from './Components/Education';
import { Awards } from './Components/Awards';
import { Certificates } from './Components/Certificates';
import { Interests } from './Components/Interests';
import { Projects } from './Components/Projects';
import { Publications } from './Components/Publications';
import { References } from './Components/References';
import { Work } from './Components/Work';
import { Volunteer } from './Components/Volunteer';
import { Skills } from './Components/Skills';
import { Languages } from './Components/Languages';
import { FloatingDownloadButton } from "./Components/FloatingDownloadButton";

export const Resume = (resume: ResumeProps) => {
  
  return(
  <ResumeProvider value={resume}>
    <div className={"resume"}>
      <Sidebar />
     {resume.basics && <Basics {...resume.basics} />}
         {resume.skills && (
                 <Skills skills={resume.skills} className={"section mb-4 hideDesktop"} />
               )}
               {resume.languages && (
                 <Languages languages={resume.languages} className={"section mb-4 hideDesktop"} />
               )}
         {resume.work && <Work work={resume.work} />}
         {resume.projects && <Projects projects={resume.projects} />}
         {resume.volunteer && <Volunteer volunteer={resume.volunteer} />} {/* Fix: Pass volunteer prop */}
         {resume.education && <Education education={resume.education} />} {/* Fix: Pass education prop */}
         {resume.awards && <Awards awards={resume.awards} />} {/* Fix: Pass awards prop */}
         {resume.certificates && <Certificates certificates={resume.certificates} />} {/* Fix: Pass certificates prop */}
         {resume.publications && <Publications publications={resume.publications} />}
         {resume.interests && <Interests interests={resume.interests} />}
         {resume.references && <References references={resume.references} />}
     
      <FloatingDownloadButton />
    </div>
  </ResumeProvider>
)};
