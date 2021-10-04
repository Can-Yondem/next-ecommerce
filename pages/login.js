import React, { useState } from "react";
import Signin from "../components/SignIn";
import Signup from "../components/SingUp";
import Image from "next/image";
import LogImg from "../public/log.jpg";
import moment from "moment";
var check = moment("2021-10-01T12:41:44.003423+00:00", "YYYY/MM/DD HH:mm:ss");

var month = check.format("M");
var day = check.format("D");
var year = check.format("YYYY");
var hour = check.format("HH");
var minute = check.format("mm");
var second = check.format("ss");
console.log(second);

export default function Home() {
  const [toggle, setToggle] = useState("in");
  return (
    <>
      const [toggle, setToggle] = useState("in"); return (
      <div className="flex justify-center">
        <Image
          src={LogImg}
          alt="herosection photo"
          layout="fill"
          quality="100"
          objectFit="cover"
        />
        <div className="absolute top-0 w-full ">
          <div className="flex justify-center mt-32 pb-10 gap-10 bg-white sm:w-[475px] w-[350px] mx-auto rounded-t-xl py-7">
            <button
              className={
                toggle === "in"
                  ? "font-bold text-4xl border-b-4 pb-2 border-primary-color"
                  : "font-bold text-2xl"
              }
              onClick={() => setToggle("in")}
            >
              Giriş Yap
            </button>
            <button
              className={
                toggle === "up"
                  ? "font-bold text-4xl border-b-4 pb-2 border-primary-color"
                  : "font-bold text-2xl"
              }
              onClick={() => setToggle("up")}
            >
              Kayıt Ol
            </button>
          </div>
          {toggle === "in" ? <Signin /> : <Signup />}
        </div>
      </div>
      )
    </>
  );
}


