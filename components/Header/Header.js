import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import DropDownAccount from "../DropDownAccount";
import TextTruncate from "react-text-truncate";
import Navbar from "../Navbar/";
import SearchBar from "../SearchBar/SearchBar";
import BagModal from "../BagModal/BagModal";
import { useSelector } from "react-redux";

const Header = ({ role, fullName }) => {
  const [toggle, setToggle] = useState(false);
  const [shopingCardToggle, setShoppingCardToggle] = useState(false);
  const userBag = useSelector((state) => state.bag.userBag);

  return (
    <>
      <div className=" w-full fixed z-10 top-0 bg-white ">
        <div className="border-b-2 p-4">
          <div className="container mx-auto grid grid-cols-12  ">
            <div className="lg:col-span-3 col-span-4">LOGO</div>
            <div className="lg:col-span-6 hidden lg:block relative">
              <SearchBar />
            </div>
            <ul className="flex gap-10 text-3xl lg:col-span-3 col-span-8 ml-auto items-center">
              {fullName ? (
                <>
                  <li className="hover:text-primary-color transition ease-out duration-200 cursor-pointer ">
                    <button
                      className="flex bg-primary-color text-white px-3 items-center rounded-xl py-1 hover:bg-yellow-700 transition ease-out duration-300"
                      onClick={() => setToggle(!toggle)}
                    >
                      <div className="mr-2">
                        <MdPersonOutline />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-left">
                          Hesabım
                        </p>
                        <p className="text-xs -mt-1">
                          <TextTruncate
                            line={1}
                            truncateText="…"
                            text={fullName}
                          />
                        </p>
                      </div>
                    </button>
                  </li>
                  {toggle && <DropDownAccount role={role} />}
                </>
              ) : (
                <li className="hover:text-primary-color transition ease-out duration-200 cursor-pointer">
                  <a
                    href="/login"
                    className="flex bg-primary-color text-white px-3 items-center rounded-xl py-1 hover:bg-yellow-700 transition ease-out duration-300"
                  >
                    <div className="mr-2">
                      <MdPersonOutline />
                    </div>
                    <div>
                      <p className="text-base font-semibold">Giriş Yap</p>
                      <p className="text-xs -mt-1">veya üye ol</p>
                    </div>
                  </a>
                </li>
              )}

              <li
                className="hover:text-primary-color transition ease-out duration-200 cursor-pointer relative"
                onClick={() => setShoppingCardToggle(!shopingCardToggle)}
              >
                <div className="absolute bg-red-600 rounded-full text-sm text-white h-4 w-4 flex items-center justify-center -right-1">
                  {userBag.length}
                </div>
                <FiShoppingCart />
                {shopingCardToggle && <BagModal />}
              </li>
            </ul>
          </div>
          <div className="flex mt-2 lg:hidden">
            <SearchBar />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
