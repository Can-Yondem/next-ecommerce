import StarRatings from "react-star-ratings";
import Link from "next/link";
import ımage from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { post_bag } from "../../redux/bag/bagSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const post_bag_loading = useSelector((state) => state.bag.loading);
  const token = useSelector((state) => state.users.token);
  const myLoader = ({ src }) => {
    return item.image1[0] ? item.image1[0].url : "none.png";
  };

  const sendProduct = (item) => {
    dispatch(
      post_bag({
        id: item._id,
        price: item.price,
        quantity: 1,
        userID: user?.user.id,
        token: token,
      })
    );
  };

  return (
    <div className="flex flex-col justify-between shadow-2xl rounded-2xl p-4 cursor-pointer">
      <Link href="/product/[slug]" as={`/product/${item.slug}`}>
        <div className="py-3 mx-auto relative">
          <a>
            <ımage
              loader={myLoader}
              src={item.image1[0] ? item.image1[0].url : "none.png"}
              alt=""
              height="250"
              width="250"
            />
          </a>
        </div>
      </Link>
      <div>
        <p className="font-semibold sm:text-sm text-base text-center">
          {item.product_name}
        </p>
        <div className="flex mb-3 justify-center">
          <StarRatings
            rating={3}
            starRatedColor="red"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="0"
          />
          <p className="text-sm mt-1">(150)</p>
        </div>
        <div>
          <p className="font-bold text-2xl text-primary-color text-center">
            {item.price}₺
          </p>
        </div>
        <button
          className={`text-white font-semibold bg-primary-color hover:bg-yellow-700 p-2 w-full rounded-xl mt-4 transition ease-out duration-300 disabled:opacity-50 disabled:bg-gray-400`}
          disabled={post_bag_loading}
          onClick={() => sendProduct(item)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
