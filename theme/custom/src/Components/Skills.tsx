import { Skill } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionItem } from "./SectionItem";

export const Skills = ({ skills, className }: { skills: Skill[]; className?: string }) => {
  const { t } = useTranslation();
  return skills.length > 0 ? (
    <Section title={t("Skills")} className={className}>
      {skills.map((skill, index) => (
        <SectionItem
          key={index}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
        ></SectionItem>
      ))}
    </Section>
  ) : null;
};
