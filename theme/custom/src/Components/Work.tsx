import { Work as WorkItemProps } from "../types";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { SectionDetailItem } from "./SectionDetailItem";

export const Work = ({ work }: { work: WorkItemProps[] }) => {
  const { t } = useTranslation();
  return work.length ? (
    <Section title={t("Work Experience") + "(" + work.length + ")"}>
      <ul>
        {work.map((workItem, index) => (
          <SectionDetailItem
            key={index}
            {...workItem}
            title={workItem.position}
            subTitle={workItem.name}
          />
        ))}
      </ul>
    </Section>
  ) : null;
};
