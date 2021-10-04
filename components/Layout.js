import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const routeControl = router.route !== "/login";
  return (
    <>
      {routeControl && <Header />}
      <main className={routeControl && "mt-32"}>{children}</main>
    </>
  );
};

export default Layout;
