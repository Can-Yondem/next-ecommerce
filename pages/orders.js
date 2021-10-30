import { useSelector, useDispatch } from "react-redux";
import { get_order } from "../redux/bag/bagSlice";
import { useEffect } from "react";
import moment from "moment";

const orders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const orders = useSelector((state) => state.bag.orders);
  var monthsArray = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const statusImgObj = {
    success: "success.png",
    pending: "pending.png",
    cancel: "cancel.png",
    in_cargo: "in_cargo.png",
  };

  const statusTextObj = {
    success: "Şiparişiniz teslim edildi.",
    pending: "Siparişiniz hazırlanıyor.",
    cancel: "Şiparişiniz iptal edildi.",
    in_cargo: "Şiparişiniz kargoya verildi.",
  };

  useEffect(() => {
    dispatch(get_order(user?.token));
  }, [user]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-5 pt-14">
        <p className="font-semibold text-4xl">Siparişler</p>
      </div>
      {orders.length === 0 ? (
        <div className="text-center mt-10 font-semibold text-xl">
          Sipariş sayfanız boş görünüyor...
        </div>
      ) : (
        orders.map((order) => {
          var check = moment(order.createdAt, "YYYY/MM/DD HH:mm:ss");
          var month = monthsArray[check.format("MM") - 1];
          var day = check.format("DD");
          var year = check.format("YYYY");
          var clock = check.format("HH:mm");

          return (
            <div className="p-3 border-2 border-gray-200 mt-10">
              <div className="flex gap-9 bg-gray-100 p-3">
                <div>
                  <p className="text-sm font-semibold">Sipariş Tarihi</p>
                  <p className="text-sm">{`${day} ${month} ${year} - ${clock}`}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Alıcı</p>
                  <p className="text-sm">{`${order.user.name} ${order.user.surname}`}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Tutar</p>
                  <p className="text-sm text-primary-color">
                    {order.total_price}₺
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-semibold">Sipariş Durumu</p>
                  <p className="text-sm">{statusTextObj[order.status]}</p>
                </div>
                <img
                  src={statusImgObj[order.status]}
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <div>
                {order.baggs.map((bag) => {
                  return (
                    <div className="grid grid-cols-12 placeholder-yellow-300 items-center my-4 border-l-4 border-primary-color ml-10">
                      <img
                        src={bag.product?.image1.url}
                        alt=""
                        className="w-14 h-14 mx-auto"
                      />
                      <p className="col-span-4">{bag.product?.product_name}</p>
                      <p className="col-span-2">{bag.quantity}</p>
                      <p className="">{bag.price}₺</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default orders;
