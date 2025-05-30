import React from "react";
import { IconLib } from "./icons";

export const FloatingDownloadButton: React.FC = () => (
  <a href="resume.pdf" download="resume.pdf">
    <button
      className="floating-download-button clay"
      aria-label="Download PDF Resume"

    >
      <IconLib.download />
      PDF
    </button>
  </a>
);
