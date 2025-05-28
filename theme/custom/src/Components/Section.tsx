import clsx from "clsx";
import React from "react";
import styles from "./Section.module.css";
type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, children, className }: Props) {
  return (
    <div className={clsx( className, "section")}>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  );
}
