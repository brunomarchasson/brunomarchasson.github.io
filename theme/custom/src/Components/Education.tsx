import { Education as PropsItem } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Education = ({ education }: { education: PropsItem[] }) => {
  const { t } = useTranslation();

  return education.length > 0 ? (
    <Section title={t("Education") + "(" + education.length + ")"}>
      <ul>
        {education.map((item, index) => (
          <SectionDetailItem
            key={index}
            {...item}
            title={item.studyType + " " + item.area}
            subTitle={item.institution}
            keywords={item.courses}
            dateFormat="yyyy"
          />
        ))}
      </ul>
    </Section>
  ) : null;
};
