import { Project } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation();
  return projects.length > 0 ? (
    <Section title={t("Projects") + "(" + projects.length + ")"}>
      {projects.map((project, index) => (
        <SectionDetailItem
          key={index}
          {...project}
          title={project.name}
          summary={project.description}
        />
      ))}
    </Section>
  ) : null;
};
