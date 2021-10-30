import { AiOutlineClose } from "react-icons/ai";

const PanelOrderDetail = ({ orderDetail,setToggle, toggle }) => {
  return (
    <div className="absolute w-[1500px] h-[800px] bg-white p-4">
      <div className="flex justify-between mb-5">
        <p className="text-4xl">Sipariş Detayı</p>
        <i className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          <AiOutlineClose />
        </i>
      </div>
      <table className="w-full">
        <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
          <th className="py-3">Ürün Resmi</th>
          <th className="py-3">Ürün Adı</th>
          <th className="py-3">Miktar</th>
          <th className="py-3">Fiyat</th>
        </tr>
        {orderDetail.baggs.map((item) => {
          return (
            <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
              <td className="py-3">
                <img
                  src={item.product.image1.url}
                  alt=""
                  className="w-14 rounded-full"
                />
              </td>
              <td className="py-3">{item.product.product_name}</td>
              <td className="py-3">{item.quantity}</td>
              <td className="py-3">{item.price}₺</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default PanelOrderDetail;
