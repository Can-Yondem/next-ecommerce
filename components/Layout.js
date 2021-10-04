import React, { useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { checkUserLoggedIn } from "../redux/user/userSlice";

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  let role = "";
  let fullName = "";
  let isUser = false;

  useEffect(() => {
    dispatch(checkUserLoggedIn());
  }, [dispatch]);

  if (user !== null) {
    role = user.user.role.type;
    fullName = `${user.user.name} ${user.user.surname}`;
    isUser = true;
  }
  const routeControl = router.route !== "/login";
  return (
    <>
      {routeControl && <Header role={role} fullName={fullName} isUser={isUser} />}
      <main className={routeControl && "mt-32"}>{children}</main>
    </>
  );
};

export default Layout;
