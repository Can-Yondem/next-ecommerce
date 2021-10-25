import Link from "next/link";
const PanelLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 ">
        <ul className=" text-white w-64 px-10 fixed top-16">
          <li className="mb-2">
            <Link href="/admin/main_category">
              <a>Kategoriler</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/products">
              <a>Ürünler</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="orders">
              <a>Siparişler</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-10 px-10 bg-gray-100 w-full">{children}</div>
    </div>
  );
};

export default PanelLayout;
