import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
