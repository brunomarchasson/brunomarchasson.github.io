import React from "react";
import { IconLib } from "./icons";

export const FloatingDownloadButton: React.FC = () => (
  <nav className="menu ">
    <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
    <label
      className="menu-open-button clay"
      htmlFor="menu-open"
      aria-label="Open menu"
      tabIndex={0}
    >
      <IconLib.download size="1em" />
    </label>
    <a
      href="resume.pdf"
      download="resume.pdf"
      className="menu-item clay"
      aria-label="Download PDF resume"
    >
      <IconLib.pdf aria-hidden="true" />
    </a>
    <a
      href="resume.json"
      download="resume.json"
      className="menu-item clay"
      aria-label="Download JSON resume"
    >
      <IconLib.json aria-hidden="true" />
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" aria-label="Gooey effect">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </nav>
);
