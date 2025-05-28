import { Award as PropsItem } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Awards = ({ awards }: { awards: PropsItem[] }) => {
  const { t } = useTranslation();

  return awards.length > 0 ? (
    <Section title={t("Awards") + "(" + awards.length + ")"}>
      {awards.map((item, index) => (
        <SectionDetailItem
          key={index}
          {...item}
          title={item.title}
          endDate={item.date}
          subTitle={item.awarder}
          dateFormat="yyyy"
        />
      ))}
    </Section>
  ) : null;
};
