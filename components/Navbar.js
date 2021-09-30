import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { MdPersonOutline } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai';
import DropMenuAccount from './DropMenuAccount';
import TextTruncate from 'react-text-truncate';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserLoggedIn } from '../redux/user/userSlice';
import { get_maincategory } from '../redux/products/productsSlice';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const mainCategory = useSelector(state => state.products.mainCategory);
    let role = "";
    let fullName = "";

    useEffect(() => {
        dispatch(get_maincategory());
        dispatch(checkUserLoggedIn())
    }, [dispatch]);

    if (!mainCategory) return null;

    if (user !== null) {
        role = user.user.role.type
        fullName = `${user.user.name} ${user.user.surname}`
    }

    return (
        <>
            <div className=" w-full fixed z-10 top-0 bg-white ">
                <div className="border-b-2 p-4">
                    <div className="container mx-auto grid grid-cols-12  ">
                        <div className="col-span-3">LOGO</div>
                        <div className="flex col-span-6 justify-center items-center">
                            <input type="text" placeholder="Arama yap" className="outline-none border-2 border-r-0 rounded-l-2xl border-gray-300 w-full h-9 p-1 pl-3" />
                            <div className="border-2 border-l-0 rounded-r-2xl flex items-center text-2xl pr-2 text-gray-800 border-gray-300 h-9">
                                <AiOutlineSearch />
                            </div>
                        </div>
                        <ul className="flex gap-10 text-3xl col-span-3 ml-auto items-center">
                            {user ?
                                <>
                                    <li className="hover:text-primary-color transition ease-out duration-200 cursor-pointer ">
                                        <button className="flex bg-primary-color text-white px-3 items-center rounded-xl py-1 hover:bg-yellow-700 transition ease-out duration-300" onClick={() => setToggle(!toggle)}>
                                            <div className="mr-2">
                                                <MdPersonOutline />
                                            </div>
                                            <div>
                                                <p className="text-base font-semibold text-left">Hesabım</p>
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
                                    {toggle && <DropMenuAccount role={role} />}
                                </> : <li className="hover:text-primary-color transition ease-out duration-200 cursor-pointer">
                                    <a href="/login" className="flex bg-primary-color text-white px-3 items-center rounded-xl py-1 hover:bg-yellow-700 transition ease-out duration-300">
                                        <div className="mr-2">
                                            <MdPersonOutline />
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold">Giriş Yap</p>
                                            <p className="text-xs -mt-1">veya üye ol</p>
                                        </div>
                                    </a>
                                </li>
                            }


                            <li className="hover:text-primary-color transition ease-out duration-200 cursor-pointer">
                                <FiShoppingCart />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto py-2">
                    <ul className="flex gap-6 justify-center font-semibold">
                        <li className="hover:text-primary-color transition ease-out duration-200">
                            <Link href="/">
                                <a>
                                    Ana Sayfa
                                </a>
                            </Link>
                        </li>

                        {mainCategory.map((item, index) => {
                            return (
                                <li key={index} className="hover:text-primary-color transition ease-out duration-200">
                                    <Link href={`/${item.main_category.toLowerCase()}`} >
                                        <a>
                                            {item.main_category}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
