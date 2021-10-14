import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { get_products } from "../../redux/products/productsSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();

  const isTyping = search.replace(/\s+/, "").length > 0;

  useEffect(() => {
    dispatch(get_products());
  }, [dispatch]);

  useEffect(() => {
    if (isTyping) {
      const filterResult = products.filter((product) =>
        product.product_name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(filterResult.length > 0 ? filterResult : false);
    } else {
      setResult([]);
    }
  }, [dispatch, search]);

  return (
    <div className="flex justify-center items-center w-full relative">
      <input
        type="text"
        placeholder="Ürün ara"
        className="outline-none border-2 border-r-0 rounded-l-2xl border-gray-300 w-full h-9 p-1 pl-3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="border-2 border-l-0 rounded-r-2xl flex items-center text-2xl pr-2 text-gray-800 border-gray-300 h-9">
        <AiOutlineSearch />
      </div>
      {search && (
        <ul className="absolute w-full bg-white top-10 rounded-lg border-2 border-gray-300 max-h-96 overflow-y-auto">
          {result ? (
            result.map((product) => {
              return (
                <li
                  key={product.id}
                  className="flex items-center gap-x-7 hover:bg-gray-200 transition duration-300 cursor-pointer px-6 py-2 border-l-8 border-white hover:border-primary-color"
                >
                  <img
                    src={product.image1[0]?.url}
                    alt=""
                    className="w-16 h-16"
                  />
                  <p>{product.product_name}</p>
                </li>
              );
            })
          ) : (
            <li className="text-sm h-32 flex items-center justify-center">{`"${search}" ile ilgili birşey bulunamadı.`}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
