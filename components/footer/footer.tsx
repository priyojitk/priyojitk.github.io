import React from "react";
import Social from "../social/social";
import Link from "next/link";
import { CURRENT_YEAR } from "@/config";
const footers = [
  {
    title: "Links",
    links: [
      { name: "UUID Tools", ref: "/uuid" },
      { name: "uuid", ref: "/uuid" },
    ],
  },
  {
    title: "Other Links",
    links: [{ name: "Disclaimer", ref: "/disclaimer" }],
  },
  {
    title: "About",
    links: [
      {
        name: "About me",
        ref: "/resume",
      },
    ],
  },
];
export default function Footer() {
  return (
    <footer className="mt-8 pt-4 bg-gray-100 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Social />
          </div>
          {footers.map((footer, index) => (
            <div key={index}>
              <h5 className="font-semibold text-gray-800">{footer.title}</h5>
              <ul className="mt-2 space-y-1">
                {footer.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      className="text-gray-600 hover:text-gray-800"
                      href={link.ref}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-2 mt-4">
        &copy; {CURRENT_YEAR}
      </div>
    </footer>
  );
}
