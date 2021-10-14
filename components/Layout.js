import React, { useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { checkUserLoggedIn } from "../redux/user/userSlice";
import { get_bag, deleteBagAndOrders } from "../redux/bag/bagSlice";

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);

  let role = "";
  let fullName = "";

  useEffect(() => {
    dispatch(checkUserLoggedIn());
    dispatch(get_bag(token));
  }, [dispatch, token]);

  if (user !== null) {
    role = user.user.role.type;
    fullName = `${user.user.name} ${user.user.surname}`;
  }

  const routeControl = router.route !== "/login";
  return (
    <>
      {routeControl && <Header role={role} fullName={fullName} />}
      <main className={routeControl && "mt-32"}>{children}</main>
    </>
  );
};

export default Layout;
