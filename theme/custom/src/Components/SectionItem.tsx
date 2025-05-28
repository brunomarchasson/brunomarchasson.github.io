// import styles from "./SectionItem.module.css";
import { TagList } from "./Tag";

type Props = { name?: string; level?: string; keywords?: string[] };

export function SectionItem({ name, level, keywords }: Props) {
  return (
    <div className={"section-item"}>
      {name && <h3 >{name}</h3>}
      {level && (
        <div className={`${"styles.level"} ${level.toLowerCase()}`}>
          <em>{level}</em>
        </div>
      )}
      {keywords?.length && <TagList tags={keywords} />}
    </div>
  );
}

