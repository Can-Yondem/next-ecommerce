import { useSelector } from "react-redux";
import Link from "next/link";

const BagModal = () => {
  const userBag = useSelector((state) => state.bag.userBag);
  return (
    <div className="absolute top-12 -left-52 w-96 ">
      <div className="bg-white rounded-md border-2 border-gray-300">
        {userBag.length === 0 ? (
          <div className="text-base text-center mt-3">Sepet Boş</div>
        ) : (
          userBag.map((item) => {
            return (
              <div className="flex items-center border-b-2 border-gray-300 p-4">
                <img
                  src={item.product?.image1[0].url}
                  alt=""
                  className="w-20 h-20"
                />
                <div className="text-sm ml-4">
                  <p className="font-bold text-primary-color">{item.product?.product_name}</p>
                  <div className="text-gray-600 font-semibold">
                    <span>{item.quantity}</span>
                    <span> X </span>
                    <span>{item.product?.price}₺</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <Link href="/bag">
          <a className="text-base py-1 block w-28 mx-auto border-2 bg-primary-color rounded-2xl text-white text-center mt-3 mb-3">Sepete Git</a>
        </Link>
      </div>
    </div>
  );
};

export default BagModal;
