import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';

const Signin = () => {
    return (
        <div>
            <form className="flex flex-col justify-center items-center gap-6 bg-white sm:w-[475px] w-[350px] rounded-b-xl mx-auto">
                    <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
                        <div className="text-lg text-gray-400">
                            <AiOutlineUser />
                        </div>
                        <input type="text" id="email" className="p-2 pl-3 rounded-2xl outline-none w-72" placeholder="Ad" />
                    </div>
                    <div className="flex items-center  border-b-2 border-gray-300 focus-within:border-primary-color">
                        <div className="text-lg text-gray-400">
                            <AiOutlineUser />
                        </div>
                        <input type="text" id="email" className="p-2 pl-3 rounded-2xl outline-none w-72" placeholder="Soyad" />
                    </div>
                <div>
                    <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
                        <div className="text-lg text-gray-400">
                            <VscKey />
                        </div>
                        <input type="password" id="password" className="p-2 pl-3 rounded-2xl outline-none w-72" placeholder="Şifre" />
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color ">
                        <div className="text-lg text-gray-400">
                            <VscKey />
                        </div>
                        <input type="password" id="password" className="p-2 pl-3 rounded-2xl outline-none w-72" placeholder="Şifre Tekrar" />
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center border-b-2 border-gray-300">
                        <div className="text-lg text-gray-400">
                            <AiOutlineMail />
                        </div>
                        <input type="email" id="email" className="p-2 pl-3 rounded-2xl outline-none w-72" placeholder="Eposta" />
                    </div>
                </div>
                <button className="flex items-center gap-3 mb-5 md:px-10 px-5 text-white font-semibold  bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300 ">Giriş Yap</button>
            </form>
        </div>
    )
}

export default Signin
