import React from "react";
import { useTranslation } from "react-i18next";
import { useResume } from "../resumeContext";
// import styles from "./Sidebar.module.css";
import { IconLib } from "./icons";
import { BasicsLocation, BasicsProfile } from "../types";
import { Skills } from "./Skills";
import { Languages } from "./Languages";

const Location: React.FC<BasicsLocation> = ({
  address,
  postalCode,
  city,
  region,
  countryCode,
}) => (
  <div className={"flex items-start icon-text"}>
    <IconLib.envelope  />
    {"\u00A0"}
    <span >
      {address && <span className="address">{address}, </span>}
      {postalCode && <span className="postalCode">{postalCode}, </span>}
      {city && <span className="city">{city}, </span>}
      {region && <span className="region">{region} </span>}
      {countryCode && <span className="countryCode">{countryCode}</span>}
    </span>
  </div>
);

export const Contact: React.FC = () => {
  const { email, url, phone, location } = useResume().basics ?? {};

  return (
    <div className={"contact"}>
     
      {url && (
        <div className={"flex items-center icon-text"}>
          <IconLib.web />
          <a
            className="hide-href-print"
            target="_blank"
            href={url}
            rel="noreferrer"
          >
            {"\u00A0"}
            {url}
          </a>
        </div>
      )}
      {email && (
        <div className={"flex items-center icon-text"}>
          <IconLib.email />
          <a className="hide-href-print" href={`mailto:${email}`}>
            {"\u00A0"}
            {email}
          </a>
        </div>
      )}
      {phone && (
        <div className={"flex items-center icon-text"}>
          <IconLib.phone />
          <a className="hide-href-print" href="tel:{{phone}}">
            {"\u00A0"}
            {phone}
          </a>
        </div>
      )}
       <Location {...location}></Location>
    </div>
  );
};

const Profile: React.FC<BasicsProfile> = ({ network, username, url }) => {
  if (!network) return null;
  const Icon = IconLib[network.toLowerCase() as keyof typeof IconLib];
  return (
    <div className={"flex items-center icon-text"}>
      {Icon && <Icon  />}
      <span className={`${network.toLowerCase()}`}></span>
      {url ? (
        <span className="url">
          <a target="_blank" href={url} rel="noreferrer">
            {"\u00A0"}
            {username}
          </a>
        </span>
      ) : (
        <span>
          {"\u00A0"}
          {username}
        </span>
      )}
    </div>
  );
};

export function Sidebar() {
  const { t, i18n } = useTranslation();
  const resume = useResume();
  const { image, name, profiles } = resume.basics ?? {};
  return (
   
    <aside className={"sidebar"}>
      {image && <img className={"image"} src={image} alt={name} />}
      <div className={"name"}>{name}</div>


    <div className={"sidebar__content"}>

      <Contact />
      {profiles && (
        <div id={"profiles"}>
          {profiles.map((profile, index) => (
            <Profile {...profile} key={index} />
          ))}
        </div>
      )}
  
      {resume.skills && (
        <Skills skills={resume.skills} className={"section mt-4 hideMobile"} />
      )}
      {resume.languages && (
        <Languages languages={resume.languages} className={"section mt-4 hideMobile"} />
      )}
      
    </div>
    </aside>
  
  );
}
