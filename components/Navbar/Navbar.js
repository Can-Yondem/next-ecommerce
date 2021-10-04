import Link from "next/link";
import React, { useEffect } from "react";
import { get_maincategory } from "../../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const mainCategory = useSelector((state) => state.products.mainCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_maincategory());
  }, [dispatch]);

  if (!mainCategory) return null;

  return (
    <>
      <div className="container mx-auto py-2">
        <ul className="flex gap-4 justify-center font-semibold text-sm text-center items-center leading-4">
          <li className="hover:text-primary-color transition ease-out duration-200">
            <Link href="/">
              <a>Ana Sayfa</a>
            </Link>
          </li>

          {mainCategory.map((item, index) => {
            return (
              <li key={index} className="w-28">
                <div>
                  <Link
                    href="/[main_category_slug]"
                    as={`/${item.main_category_slug}`}
                  >
                    <a className="hover:text-primary-color transition ease-out duration-200 cursor-pointer">
                      {item.main_category}
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
