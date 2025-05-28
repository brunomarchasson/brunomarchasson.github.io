import { Interest as PropsItem } from "../types";
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from "react-i18next";
import { Section } from "./Section";
import { SectionItem } from "./SectionItem";

interface Props  {
  interests: PropsItem[]
  className?: string
}

export const Interests = ({
  interests,
  className,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {interests.length && (
        <Section title={t("Interests")} className={className}>
          {interests.map((item, index) => (
            <SectionItem
              key={index}
              name={item.name}
              keywords={item.keywords}
            ></SectionItem>
          ))}
        </Section>
      )}
    </>
  );
};
