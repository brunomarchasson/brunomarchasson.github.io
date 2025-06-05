import { Publication as PropsItem } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Publications = ({ publications }: { publications: PropsItem[] }) => {
  const { t } = useTranslation();

  return publications.length > 0 ? (
    <Section title={t("Publications") + "(" + publications.length + ")"}>
      <ul>
        {publications.map((item, index) => (
          <SectionDetailItem
            key={index}
            {...item}
            title={item.name}
            subTitle={item.publisher}
            endDate={item.releaseDate}
            dateFormat="dd LLL yyyy"
          />
        ))}
      </ul>
    </Section>
  ) : null;
};
