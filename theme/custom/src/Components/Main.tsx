import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';
import { useResume } from '../resumeContext';
import { Basics } from './Basics';
import { Education } from './Education';
import { Awards } from './Awards';
import { Certificates } from './Certificates';
import { Interests } from './Interests';
import { Projects } from './Projects';
import { Publications } from './Publications';
import { References } from './References';
import { Work } from './Work';
// import styles from './Main.module.css'
import { Volunteer } from './Volunteer';
import { Skills } from './Skills';
import { Languages } from './Languages';

export function Main () {
  const { t, i18n } = useTranslation();
  const resume = useResume();
  return <main className = {"main"}>
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

  </main>
}