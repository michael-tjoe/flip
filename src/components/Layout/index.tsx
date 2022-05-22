import { ReactNode } from "react";
import { styContainer } from "@styles/base";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <main className={styContainer}>{children}</main>;
}

export default Layout;
