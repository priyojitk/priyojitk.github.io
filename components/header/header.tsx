import Link from "next/link";
import React from "react";

export default function Header() {
  const links = [
    { title: "Resume", ref: "/resume" },
    { title: "About", ref: "/about" },
  ];

  return (
    <header className="bg-gray-100 border-b py-4 mb-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <Link href="/" className="text-xl font-semibold text-gray-800">
          Priyojit Kharibam
        </Link>

        <nav>
          <ul className="flex space-x-4">
            {links.map((menu, i) => (
              <li key={i}>
                <Link
                  href={menu.ref}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
