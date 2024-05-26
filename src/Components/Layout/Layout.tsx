import Head from "next/head";
import { ReactNode } from "react";
import SideBar from "@/Components/SideBar/SideBar";
import { styleText } from "util";
import styles from "./layout.module.css";
interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}
