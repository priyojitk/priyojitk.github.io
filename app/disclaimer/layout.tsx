import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto my-4 max-w-7xl">{children}</div>
      <Footer />
    </>
  );
}
