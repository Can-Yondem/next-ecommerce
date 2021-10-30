import { useSelector, useDispatch } from "react-redux";
import {
  get_order,
  update_order,
  findOrderDetail,
  delete_order,
} from "../../redux/bag/bagSlice";
import { useEffect, useState } from "react";
import PanelLayout from "../../components/PanelLayout";
import PanelOrder from "../../components/PanelOrder";
import PanelOrderDetail from "../../components/PanelOrderDetail";

const orders = () => {
  const token = useSelector((state) => state.users.token);
  const orders = useSelector((state) => state.bag.orders);
  const orderDetail = useSelector((state) => state.bag.orderDetail);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    dispatch(get_order(token));
  });

  const updateOrder = (orderData) => {
    dispatch(update_order({ ...orderData, token }));
  };

  const deleteOrder = (id) => {
    dispatch(delete_order({ id, token }));
  };

  const handleClick = (id) => {
    setToggle(!toggle);
    dispatch(findOrderDetail(id));
  };

  return (
    <PanelLayout>
      {toggle && (
        <PanelOrderDetail
          orderDetail={orderDetail[0]}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
      <div className="flex justify-between mb-5">
        <p className="text-4xl">Siparişler</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <table className="w-full">
          <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
            <th className="w-2/12 py-3">ID</th>
            <th className="w-2/12 py-3">Sipariş Tarihi</th>
            <th className="w-2/12 py-3">Müşteri</th>
            <th className="w-1/12 py-3">Fiyat</th>
            <th className="w-1/12 py-3">Durum</th>
            <th className="w-2/12 py-3">Güncelleme Tarihi</th>
            <th className="w-2/12 py-3">Işlemler</th>
          </tr>
          {orders.map((order) => {
            return (
              <tr
                className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out"
              >
                <PanelOrder order={order} updateOrder={updateOrder} deleteOrder={deleteOrder} onClick={() => handleClick(order.id)}/>
              </tr>
            );
          })}
        </table>
      </div>
    </PanelLayout>
  );
};

export default orders;
