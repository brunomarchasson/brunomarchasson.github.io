import { Language } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionItem } from "./SectionItem";

export const Languages = ({
  languages,
  className,
}: {
  languages: Language[];
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <>
      {languages.length && (
        <Section title={t("Languages")} className={className}>
          <ul>
            {languages.map((language, index) => (
              <SectionItem
                key={index}
                name={language.language}
                level={language.fluency}
              ></SectionItem>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};
