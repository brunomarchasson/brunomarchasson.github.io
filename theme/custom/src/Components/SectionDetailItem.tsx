import { useTranslation } from "react-i18next";
import { Iso8601 } from "../types";
// import styles from "./SectionDetailItem.module.css";
import { TagList } from "./Tag";
import { FormatDate } from "../dateHelpers";
import { IconLib } from "./icons";

type Props = {
  subTitle?: string;
  location?: string;
  summary?: string;
  title?: string;
  url?: string;
  startDate?: Iso8601;
  endDate?: Iso8601;
  highlights?: string[];
  keywords?: string[];
  dateFormat?:string
};

export const SectionDetailItem = ({
  subTitle,
  location,
  summary,
  title,
  url,
  startDate,
  endDate,
  highlights,
  keywords,
  dateFormat
}: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <section className={"section-detail-item"}>
      <header>
        <div className={"dates"}>
          {startDate && (
            <span>
              {FormatDate(startDate, dateFormat, i18n.language)}
              {"\u00A0"}
            </span>
          )}
          {endDate ? (
            <span>{FormatDate(endDate, dateFormat, i18n.language)}</span>
          ) : (
            startDate ? <span>{`${t("Current")}`}</span> : null
          )}
        </div>
        {title && <div className={"title"}>{title}
        {subTitle && <div className={"subTitle"}>{subTitle}</div>}
          </div>}
      </header>

      {location && (
        <div className={"location"}>
          <div className={"flex items-start icon-text"}>
            <IconLib.location height="1em"/>
            {"\u00A0"}
            {location}
          </div>
        </div>
      )}

      {url && (
        <div className={"flex items-start icon-text"}>
          <IconLib.web />
          <a target="_blank" href={url} rel="noreferrer">
            {"\u00A0"}
            {url}
          </a>
        </div>
      )}

      {keywords?.length && <TagList tags={keywords} />}


      <div>
        {summary && <div className="summary">{summary}</div>}

        {highlights?.length && (
          <ul className={"highlights"}>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
