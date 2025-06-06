import { Sidebar } from "./Components/Sidebar ";
import { useResume } from "./resumeContext";
import { Basics } from "./Components/Basics";
import { Education } from "./Components/Education";
import { Awards } from "./Components/Awards";
import { Certificates } from "./Components/Certificates";
import { Interests } from "./Components/Interests";
import { Projects } from "./Components/Projects";
import { Publications } from "./Components/Publications";
import { References } from "./Components/References";
import { Work } from "./Components/Work";
import { Volunteer } from "./Components/Volunteer";
import { Skills } from "./Components/Skills";
import { Languages } from "./Components/Languages";
import { FloatingDownloadButton } from "./Components/FloatingDownloadButton";

export const Resume = () => {
  const resume = useResume();
  return (
    <>
     <main className={"resume"}>
        <Sidebar />
        {resume.basics && <Basics {...resume.basics} />}
        {resume.skills && <Skills skills={resume.skills} className={"section mb-4 hideDesktop"} />}
        {resume.languages && (
          <Languages languages={resume.languages} className={"section mb-4 hideDesktop"} />
        )}
        {resume.work && <Work work={resume.work} />}
        {resume.projects && <Projects projects={resume.projects} />}
        {resume.volunteer && <Volunteer volunteer={resume.volunteer} />}
        {resume.education && <Education education={resume.education} />}
        {resume.awards && <Awards awards={resume.awards} />}
        {resume.certificates && <Certificates certificates={resume.certificates} />}
        {resume.publications && <Publications publications={resume.publications} />}
        {resume.interests && <Interests interests={resume.interests} />}
        {resume.references && <References references={resume.references} />}
        <FloatingDownloadButton />
      </main>
    </>
  );
};
