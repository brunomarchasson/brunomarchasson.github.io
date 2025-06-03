import React from "react";
import { IconLib } from "./icons";

export const FloatingDownloadButton: React.FC = () => (
  <nav className="menu ">
    <input
      type="checkbox"
      className="menu-open"
      name="menu-open"
      id="menu-open"
    />
    <label className="menu-open-button clay" htmlFor="menu-open">
      <IconLib.download />
    </label>
    <a href="resume.pdf" download="resume.pdf"  className="menu-item clay">
        <IconLib.pdf />
    </a>
    <a href="resume.json" download="resume.pdf" className="menu-item clay">
        <IconLib.json />
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="shadowed-goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix
            in="shadow"
            mode="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
            result="shadow"
          />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feComposite in2="shadow" in="goo" result="goo" />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </nav>
);
export const FloatingDownloadButton2: React.FC = () => (
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
