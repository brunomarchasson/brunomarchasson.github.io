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
      <IconLib.download size= "1em" />
    </label>
    <a href="resume.pdf" download="resume.pdf"  className="menu-item clay">
        <IconLib.pdf />
    </a>
    <a href="resume.json" download="resume.json" className="menu-item clay">
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
