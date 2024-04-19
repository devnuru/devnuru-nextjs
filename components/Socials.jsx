"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@devnuru",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/devnuru/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/devnuru",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/devnurubd",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
