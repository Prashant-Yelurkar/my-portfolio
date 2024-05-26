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
  const [mobnav, setMobNav] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.sideBar}>
          <SideBar mobView={mobnav} />
          <MobileNav fn={() => setMobNav(!mobnav)} />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}
