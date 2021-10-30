import Link from "next/link";
import { BiCategoryAlt } from "react-icons/bi";
import { RiTShirtLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";

const PanelLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800">
        <ul className=" text-white px-10 fixed top-16">
          <li className="mb-2">
            <Link href="/admin/main_category">
              <a className="flex items-center gap-2">
                <BiCategoryAlt className="text-xl" /> Kategoriler
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/products">
              <a className="flex items-center gap-2">
                <RiTShirtLine className="text-xl" /> Ürünler
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="orders">
              <a className="flex items-center gap-2">
                <FiShoppingBag className="text-xl" /> Siparişler
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-10 px-10 bg-gray-100 w-full">{children}</div>
    </div>
  );
};

export default PanelLayout;
