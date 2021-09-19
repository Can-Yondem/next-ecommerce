import React, { useState } from 'react'
import Signin from './Signin'
import Signup from "./Signup"
import Image from "next/image"
import LogImg from "../public/log.jpg";


const Login = () => {
    const [toggle, setToggle] = useState("in");
    return (
        <div className="flex justify-center">
            <Image src={LogImg} alt="herosection photo" layout="fill" quality="100" objectFit="cover" />
            <div className="absolute top-0 w-full ">
                <div className="flex justify-center mt-32 pb-10 gap-10 bg-white sm:w-[475px] w-[350px] mx-auto rounded-t-xl py-7">
                    <button className={toggle === "in" ? "font-bold text-4xl border-b-4 pb-2 border-primary-color" : "font-bold text-2xl"} onClick={() => setToggle("in")}>Giriş Yap</button>
                    <button className={toggle === "up" ? "font-bold text-4xl border-b-4 pb-2 border-primary-color" : "font-bold text-2xl"} onClick={() => setToggle("up")}>Kayıt Ol</button>
                </div>
                {toggle === "in" ? <Signin /> : <Signup />}
            </div>
        </div>
    )
}

export default Login
