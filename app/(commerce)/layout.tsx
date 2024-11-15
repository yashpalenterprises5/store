import NavigationBar from "@/components/navigation/navigation-bar";
import Footer from "@/components/footer";
import dynamic from 'next/dynamic'
import React from "react";

const DynamicNotice = dynamic(() => import('@/components/elements/notice'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DynamicNotice />
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
