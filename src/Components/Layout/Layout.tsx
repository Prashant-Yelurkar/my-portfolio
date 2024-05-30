import Head from "next/head";
import { ReactNode, useState } from "react";
import SideBar from "@/Components/SideBar/SideBar";
import { styleText } from "util";
import styles from "./layout.module.css";
import MobileNav from "../NavBar/MobileNav";
interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.sideBar}>
          <SideBar mobView={mobNav} fn={() => setMobNav(!mobNav)} />
          <MobileNav fn={() => setMobNav(!mobNav)} mobView={mobNav} />
        </div>
        {children}
      </div>
    </>
  );
}
