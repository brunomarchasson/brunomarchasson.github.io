import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, children, className }: Props) {
  return (
    <div className={clsx(className, "section")}>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  );
}
