import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center">
        <Image
          src="/user.svg" // Replace with your actual profile image URL
          alt="Priyojit Kharibam"
          width={100}
          height={100}
          className="rounded-full border-4 border-gray-300"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Priyojit Kharibam
      </h2>
      <p className="text-gray-600">Platform Engineer | Full Stack Developer</p>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="https://priyojitk.github.io/"
          className="text-blue-500 hover:text-blue-700"
        >
          Website
        </Link>
        <Link
          href="//www.linkedin.com/in/priyojit-kharibam-16b138107/"
          className="text-blue-500 hover:text-blue-700"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:priyojitkharibam@gmail.com"
          className="text-blue-500 hover:text-blue-700"
        >
          Email
        </Link>
      </div>

      {/* Short Bio */}
      <p className="text-gray-700 mt-4">
        Passionate about building scalable microservices, integrating payments,
        and developing full-stack applications. Always exploring new
        technologies.
      </p>
    </div>
  );
}
