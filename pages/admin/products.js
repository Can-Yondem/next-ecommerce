import PanelLayout from "../../components/PanelLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  get_products_limit,
  product_count,
  delete_product,
} from "../../redux/products/productsSlice";
import { useEffect, useState } from "react";
import ProductsAddModal from "../../components/productsAddModal/ProductsAddModal";
import { BsPlusLg } from "react-icons/bs";

const products = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [start, setStart] = useState(0);
  const [menuNumber, setMenuNumber] = useState(1);
  const [productToggle, setProductToggle] = useState(false);
  const products = useSelector((state) => state.products.products);
  const productNumber = useSelector((state) => state.products.productsNumber);
  const pageNumbers = [];
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(product_count());
    dispatch(
      get_products_limit({ limit: Number(limit), start: Number(start) })
    );
  }, [limit, start]);

  let lastNumber = Math.floor(productNumber / Number(limit));

  for (let index = 1; index <= lastNumber; index++) {
    pageNumbers.push(index);
  }

  const numbers = (number, limit) => {
    setStart(number * limit);
    setMenuNumber(number);
  };

  const deleteProduct = (productID) => {
    dispatch(delete_product({ id: productID, token }));
  };

  return (
    <PanelLayout>
      <div className="w-full relative">
        {productToggle && (
          <div className="absolute">
            <ProductsAddModal
              productToggle={productToggle}
              setProductToggle={setProductToggle}
            />
          </div>
        )}
        <div className="mb-5">
          <div className="flex justify-between">
            <div>
              <p className="text-4xl">Ürünler</p>
            </div>
            <button
              className="flex justify-center items-center gap-2 bg-green-500 text-white px-5 rounded-md text-sm"
              onClick={() => setProductToggle(!productToggle)}
            >
              Ürün Ekle
            </button>
          </div>
          <p className="text-sm text-gray-500">{productNumber} ürün bulundu</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <table className="w-full">
            <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
              <th className="w-1/12 py-3">Ürün Resmi</th>
              <th className="w-2/12 py-3">Ürün Adı</th>
              <th className="w-2/12 py-3">Ürün Açıklaması</th>
              <th className="w-1/12 py-3">Marka</th>
              <th className="w-1/12 py-3">Fiyat</th>
              <th className="w-2/12 py-3">Alt Kategori</th>
              <th className="w-2/12 py-3">Işlemler</th>
            </tr>
            {products?.map((item) => (
              <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
                <td className="py-3">
                  <img
                    src={item.image1?.url || "none.jpg"}
                    alt=""
                    className="w-10 h-10"
                  />
                </td>
                <td className="py-3">{item.product_name}</td>
                <td className="py-3">{item.product_desc}</td>
                <td className="py-3">{item.trademark}</td>
                <td className="py-3">{item.price} ₺</td>
                <td className="py-3">{item.sub_category?.sub_category}</td>
                <td className="text-xl py-3">
                  <button
                    className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Sil
                  </button>
                  <button className="bg-green-500 text-sm py-1 px-3 text-white rounded-md">
                    Güncelle
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex justify-between mt-2">
            <div>
              <select
                name="limit"
                id="limit"
                className="bg-white"
                onChange={(e) => setLimit(e.target.value)}
              >
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="flex gap-4">
              {pageNumbers.map((number) => {
                return (
                  <div
                    onClick={() => numbers(number, limit)}
                    className="cursor-pointer"
                  >
                    {number}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default products;
