import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../redux/user/userSlice";
import { useRouter } from "next/router";
import { ImExit } from "react-icons/im";
import { FaBox } from "react-icons/fa";
import Link from "next/link";

const DropMenuAccount = ({ role }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sign_out = async () => {
    dispatch(signout());
    await router.push("/");
    window.location.reload();
  };

  return (
    <div className="bg-white absolute top-16 w-40 rounded-lg border-2 border-gray-300">
      <ul className="p-3 flex flex-col gap-3">
        <li>
          {role === "admin" && (
            <button className="text-lg text-secondary-color hover:text-primary-color transition duration-300" onClick={() => router.push("/admin/main_category")}>
              Admin Paneli
            </button>
          )}
        </li>
        <li>
          <Link href="/orders">
            <a className="text-base text-secondary-color flex items-center gap-2 hover:text-primary-color transition duration-300">
              <FaBox /> Siparişlerim
            </a>
          </Link>
        </li>
        <li>
          <button
            className="text-base text-secondary-color flex items-center gap-2 hover:text-primary-color transition duration-300"
            onClick={sign_out}
          >
            <ImExit /> Çıkış Yap
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropMenuAccount;
