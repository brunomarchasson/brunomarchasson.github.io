import React from "react";
import type { Basics as BasicsProps } from "../types";
export const Basics: React.FC<BasicsProps> = (props) => {
  const { label, summary } = props;

  return (
    <>
      <header className="mb-4">
        <h1 className="mb-4 text-center font-bold uppercase">{label}</h1>
        {summary}
      </header>
    </>
  );
};
