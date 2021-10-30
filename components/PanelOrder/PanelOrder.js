import { useState } from "react";

const PanelOrder = ({ order, updateOrder, deleteOrder }) => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [statusSelect, setStatusSelect] = useState();

  const submitUpdate = async (id, status) => {
    await updateOrder({ id, status });
    setUpdateOpen(false);
  };

  return (
    <>
      <td className="py-3">{order.id}</td>
      <td className="py-3">{order.createdAt}</td>
      <td className="py-3">{`${order?.user.name} ${order?.user.surname}`}</td>
      <td className="py-3">{order.total_price}₺</td>
      <td className="py-3">
        {updateOpen ? (
          <div className="flex">
            <select
              name="status"
              className="bg-white border-2 w-48 py-1 mr-2"
              onChange={(e) => setStatusSelect(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="success">Success</option>
              <option value="in_cargo">In Cargo</option>
              <option value="cancel">Cancel</option>
            </select>
            <button
              className="bg-green-500 text-white text-sm p-2 ml-3 mr-3 rounded-md"
              onClick={() => submitUpdate(order.id, statusSelect)}
            >
              Güncelle
            </button>
          </div>
        ) : (
          order.status
        )}
      </td>
      <td className="py-3">{order.updatedAt}</td>
      <td className="text-xl py-3">
        <button
          className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3"
          onClick={() => deleteOrder(order.id)}
        >
          Sil
        </button>
        <button
          className="bg-green-500 text-sm py-1 px-3 text-white rounded-md"
          onClick={() => setUpdateOpen(!updateOpen)}
        >
          Güncelle
        </button>
      </td>
    </>
  );
};

export default PanelOrder;
