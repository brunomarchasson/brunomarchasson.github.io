import React from "react";
import { useResume } from "../resumeContext";
import { IconLib } from "./icons";
import { BasicsLocation, BasicsProfile } from "../types";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import QRCode from "./QRCode";

const Location: React.FC<BasicsLocation> = ({ address, postalCode, city, region, countryCode }) => (
  <div className={"flex items-start icon-text"}>
    <IconLib.envelope height="1em" />
    {"\u00A0"}
    <span>
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
          <IconLib.web height="1em" />
          <a
            className="hide-href-print touch-target"
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
        <div className={"flex items-center icon-text "}>
          <IconLib.email height="1em" />
          <a
            className="hide-href-print touch-target"
            href={`mailto:${email}`}
          >
            {"\u00A0"}
            {email}
          </a>
        </div>
      )}
      {phone && (
        <div className={"flex items-center icon-text "}>
          <IconLib.phone height="1em" />
          <a
            className="hide-href-print touch-target"
            href={`tel:${phone.replace(/\s+/g, '')}`}
          >
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
      {Icon && <Icon height="1em" />}
      <span className={`${network.toLowerCase()}`}></span>
      {url ? (
        <span className="url">
          <a
            className="touch-target"
            target="_blank"
            href={url}
            rel="noreferrer"
          >
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
  const resume = useResume();
  const { image, name, profiles, url } = resume.basics ?? {};
  return (
    <aside className={"sidebar"}>
      {image && <img className={"image"} width={248} height={248} src={image} alt={name} />}
      <div className={"name"}>{name}</div>

      <div className={"sidebar__content"}>
        <Contact />
        {profiles && (
          <div id={"profiles"}>
            {profiles.map((profile) => (
              <Profile {...profile} key={profile.network} />
            ))}
          </div>
        )}

        {resume.skills && <Skills skills={resume.skills} className={"section mt-4 hideMobile"} />}
        {resume.languages && (
          <Languages languages={resume.languages} className={"section mt-4 hideMobile"} />
        )}
        {url && <QRCode value={url} />}
      </div>
    </aside>
  );
}
