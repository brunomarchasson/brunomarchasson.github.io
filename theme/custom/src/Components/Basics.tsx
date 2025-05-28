import React from "react";
import type { Basics as BasicsProps } from "../types";
import styles from "./Main.module.css";
export const Basics: React.FC<BasicsProps> = (props) => {
  const { label, summary } = props;
  return (
    <>
      <header  className="mb-4 ">
        <h1 className="text-center font-bold uppercase">{label}</h1>
      </header>
      {summary && <section className="mb-4">{summary}</section>}
    </>
  );
};
