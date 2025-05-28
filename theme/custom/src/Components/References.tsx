import { Reference as PropsItem } from "../types";
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from "react-i18next";
import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import { SectionDetailItem } from "./SectionDetailItem";

interface Props  {
  references: PropsItem[]
  className?: string
}

export const References = ({
  references,
  className,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {references.length && (
        <Section title={t("References") + "(" + references.length + ")"}>
          {references.map((item, index) => (
            <figure className="quote" key={index}>
              <blockquote>

              {item.reference}
              
              </blockquote>
              <figcaption>
              &mdash;{item.name}
              </figcaption>
            </figure>
           
          ))}
        </Section>
      )}
    </>
  );
};
