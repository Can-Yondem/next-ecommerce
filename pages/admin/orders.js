import PanelLayout from "../../components/PanelLayout";
import { useSelector, useDispatch } from "react-redux";
import { get_order } from "../../redux/bag/bagSlice";
import { useEffect, useState } from "react";

const orders = () => {
  const token = useSelector((state) => state.users.token);
  const orders = useSelector((state) => state.bag.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_order(token));
  });

  return (
    <PanelLayout>
      <div className="flex justify-between mb-5">
        <p className="text-4xl">Siparişler</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <table className="w-full">
          <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
            <th className="w-2/12 py-3">ID</th>
            <th className="w-2/12 py-3">Sipariş Tarihi</th>
            <th className="w-2/12 py-3">Müşteri</th>
            <th className="w-2/12 py-3">Fiyat</th>
            <th className="w-2/12 py-3">Durum</th>
            <th className="w-2/12 py-3">Güncelleme Tarihi</th>
            <th className="w-1/12 py-3">Işlemler</th>
          </tr>
          {orders.map((order) => {
            return (
              <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
                <td className="py-3">{order.id}</td>
                <td className="py-3">{order.createdAt}</td>
                <td className="py-3">{`${order?.user.name} ${order?.user.surname}`}</td>
                <td className="py-3">{order.total_price}₺</td>
                <td className="py-3">{order.status}</td>
                <td className="py-3">{order.updatedAt}</td>
                <td className="text-xl py-3">
                  <button
                    className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3"
                    onClick={() => deleteCategory(data.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </PanelLayout>
  );
};

export default orders;
