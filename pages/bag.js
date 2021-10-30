import React from "react";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  deleteItem,
  update_bag,
  update_quantity,
  updateQuantity,
  create_order,
  update_isordered,
} from "../redux/bag/bagSlice";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const bag = () => {
  const userBag = useSelector((state) => state.bag.userBag);
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const router = useRouter();
  let bagsID = [];
  let sum = 0;


  const plusQuantity = (item) => {
    let newQuantity = item.quantity + 1;
    dispatch(
      update_quantity({
        id: item.id,
        price: item.product?.price * newQuantity,
        quantity: newQuantity,
        token: token
      })
    );

  };

  const minusQuantity = (item) => {
    let newQuantity = item.quantity - 1;
    dispatch(
      update_quantity({
        id: item.id,
        price: item.product?.price * newQuantity,
        quantity: newQuantity,
        token: token
      })
    );

  };

  const deleteProduct = (id) => {
    dispatch(deleteItem(id));
    dispatch(update_bag({id: id,token:token}));
  };

  const priceSum = (price) => {
    sum += price;
  };

  const buy = (bag) => {
    bag.user_bag.forEach((item) => {
      bagsID.push(item.id);
    });
    dispatch(create_order({ baggs: bagsID, user_id: bag.user_id, total_price: bag.total_price , token: user?.token}));
    bagsID.forEach(id => {
      dispatch(update_isordered({id:id, isOrdered: true , token:token}))
    });
    window.location.reload();
  };
  return (
    <div className="h-almost">
      <div className="flex flex-col items-center gap-5 pt-14">
        <p className="font-semibold text-2xl">Sepete Ekledikleriniz</p>

        <Link href="/">
          <a
            className="text-primary-color underline"
            onClick={() => router.back()}
          >
            Alışverişe geri gön
          </a>
        </Link>
      </div>

      {userBag.length === 0 ? (
        <div className="text-center mt-10 font-semibold text-xl">
          Sepetiniz boş görünüyor...
        </div>
      ) : (
        <>
          <div className="container mx-auto flex">
            <table className="w-full mt-7">
              <thead>
                <tr>
                  <th className="flex justify-start pl-5">Ürün</th>
                  <th>Adet</th>
                  <th>Fiyat</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {userBag.map((item) => {
                  return (
                    <tr className="border-t-2 border-b-2" key={item.id}>
                      <td className="flex py-5">
                        <img
                          src={item.product?.image1.url}
                          alt=""
                          className="w-24"
                        />
                        <div className="flex flex-col justify-center pt-2">
                          <p className="text-2xl font-semibold mb-7 ml-10">
                            {item.product?.product_name}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center w-24">
                          <button onClick={() => minusQuantity(item)}>
                            <BiMinus />
                          </button>
                          <p className="px-3">{item.quantity}</p>
                          <button onClick={() => plusQuantity(item)}>
                            <BiPlus />
                          </button>
                        </div>
                      </td>
                      <td>
                        <p>{item.price}₺</p>
                        {priceSum(item.price)}
                      </td>

                      <td>
                        <button
                          className="text-primary-color text-2xl"
                          onClick={() => deleteProduct(item.id)}
                        >
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="container mx-auto flex justify-end">
            <div className="flex items-end gap-5">
              <p className="font-bold text-xl">Toplam</p>
              <p className="font-semibold text-xl">{sum}₺</p>
            </div>
            <button
              className="flex items-center gap-3 ml-10 px-10 text-white font-semibold bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300"
              onClick={() => buy({ user_bag: userBag, user_id: user?.user.id, total_price: sum })}
            >
              Satın Al
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default bag;
