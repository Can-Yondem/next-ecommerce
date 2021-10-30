import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsPlusLg } from 'react-icons/bs';
import AddCategoryModal from "./AddCategoryModal";

const PanelCategoryLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      {toggle && <div className="absolute"><AddCategoryModal toggle={toggle} setToggle={setToggle}/></div>}
      <div className="flex justify-between">
        <p className="text-4xl">Kategoriler</p>
        <button className="flex justify-center items-center gap-2 bg-green-500 text-white px-5 rounded-md text-sm" onClick={() => setToggle(!toggle)}>Kategori Ekle</button>
      </div>
      <ul className="flex text-sm gap-5 mb-5">
        <li
          className={`py-4 ${
            router.pathname === "/admin/main_category"
              ? "border-b-2 border-green-500 text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          <Link href="/admin/main_category">
            <a>Ana Kategoriler</a>
          </Link>
        </li>
        <li
          className={`py-4 ${
            router.pathname === "/admin/product_category"
              ? "border-b-2 border-green-500 text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          <Link href="/admin/product_category">
            <a>Ürün Kategorisi</a>
          </Link>
        </li>
        <li
          className={`py-4 ${
            router.pathname === "/admin/sub_category"
              ? "border-b-2 border-green-500 text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          <Link href="/admin/sub_category">
            <a>Alt Kategori</a>
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default PanelCategoryLayout;
