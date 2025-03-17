"use client";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

function social() {
  const socials = [
    {
      title: "Github",
      icon: Github,
      link: "//github.com/priyojitk",
      color: "black",
    },
    {
      title: "Linkedin",
      icon: Linkedin,
      link: "//www.linkedin.com/in/priyojit-kharibam-16b138107/",
      color: "#0A66C2",
    },
    {
      title: "Facebook",
      icon: Facebook,
      link: "//fb.com/priyojit.kharibam",
      color: "#3b5998",
    },
    {
      title: "Twitter",
      icon: Twitter,
      link: "#",
      color: "#00acee",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl">Let's connect</h3>
      <ul className="flex flex-row gap-2">
        {socials.map((social, i) => (
          <li key={i}>
            <a href={social.link} target="_blank">
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default social;
