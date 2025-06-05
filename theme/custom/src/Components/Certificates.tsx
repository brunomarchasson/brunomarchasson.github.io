import { Certificate as PropsItem } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Certificates = ({ certificates }: { certificates: PropsItem[] }) => {
  const { t } = useTranslation();

  return certificates.length > 0 ? (
    <Section title={t("Certificates") + "(" + certificates.length + ")"}>
      <ul>
        {certificates.map((item, index) => (
          <SectionDetailItem
            key={index}
            {...item}
            title={item.name}
            endDate={item.date}
            subTitle={item.issuer}
            dateFormat="yyyy"
          />
        ))}
      </ul>
    </Section>
  ) : null;
};
