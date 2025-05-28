import { Volunteer as VolunteerInterface } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Volunteer = ({ volunteer }: { volunteer: VolunteerInterface[] }) => {
  const { t } = useTranslation();
  return volunteer.length > 0 ? (
    <Section title={t("Volunteer") + "(" + volunteer.length + ")"}>
      {volunteer.map((item, index) => (
        <SectionDetailItem
          key={index}
          {...item}
          title={item.position}
          subTitle={item.organization}
          
        />
      ))}
    </Section>
  ) : null;
};
