import React, { useState } from "react";
import { VscKey } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/user/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signin({ email, password }));
    setPassword("");
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className="flex flex-col justify-center items-center gap-6 bg-white sm:w-[475px] w-[350px] rounded-b-xl mx-auto">
        <div>
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
            <div className="text-lg text-gray-400">
              <AiOutlineMail />
            </div>
            <input
              type="email"
              id="email"
              className="p-2 pl-3 rounded-2xl outline-none w-72"
              placeholder="Eposta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
            <div className="text-lg text-gray-400">
              <VscKey />
            </div>
            <input
              type="password"
              id="password"
              className="p-2 pl-3 rounded-2xl outline-none w-72 "
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Link href="/api/auth/signin">
            <button
              className="flex items-center gap-3 md:px-10 px-5 text-white font-semibold  bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300"
              onClick={handleSubmit}
            >
              Giriş Yap
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-3 w-full justify-center">
          <hr className="text-primary-color w-4/12" />
          <div className="font-semibold">yada</div>
          <hr className="text-primary-color w-4/12" />
        </div>
        <div className="flex gap-6 mb-5">
          <button className="border-2 rounded-full p-3 border-secondary-color bg-secondary-color">
            <FcGoogle />
          </button>
          <button className="border-2 rounded-full p-3 border-blue-400 bg-blue-400 text-white">
            <AiOutlineTwitter />
          </button>
          <button className="border-2 rounded-full p-3 border-blue-600 bg-blue-600 text-white">
            <ImFacebook />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
