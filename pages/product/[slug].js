import {
  GET_FıLTER_SLUG_PRODUCTS,
  GET_PRODUCTS_SLUG,
} from "../../graphql/queries";
import { add_comment, get_comment } from "../../redux/products/productsSlice";
import StarRatings from "react-star-ratings";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import client from "../../apollo-client";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { post_bag } from "../../redux/bag/bagSlice";
import Comment from "../../components/Comment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);
  const comment = useSelector((state) => state.products.comments);
  const post_bag_loading = useSelector((state) => state.bag.loading);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState();
  const [commentState, setCommentState] = useState();

  useEffect(() => {
    dispatch(get_comment(product.id));
  }, [dispatch]);

  const sendProduct = (item, quantity) => {
    dispatch(
      post_bag({
        id: item.id,
        price: item.price * quantity,
        quantity: quantity,
        userID: user?.user.id,
        token: token,
      })
    );
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_comment({
        rating,
        comment: commentState,
        token,
        user: user?.user.id,
        product: product.id,
      })
    );
  };

  return (
    <div className="container mx-auto ">
      <div className="sm:flex h-almost">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="2xl:w-6/12 xl:w-7/12 lg:w-6/12 md:w-6/12 sm:w-6/12 p-4 flex items-center">
          <img
            src={product.image1 ? product.image1.url : "none.png"}
            alt=""
            className="mx-auto sm:w-[550px] w-60"
          />
        </div>
        <div className="2xl:w-6/12 xl:w-5/12 lg:w-6/12 md:w-6/12 sm:w-6/12 lg:px-20 px-8 py-4 flex items-center">
          <div>
            <p className="font-bold md:text-5xl text-2xl text-black">
              {product.product_name}
            </p>
            <div className="mt-4 flex gap-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-full" />
              <div className="w-6 h-6 bg-red-500 rounded-full" />
              <div className="w-6 h-6 bg-green-500 rounded-full" />
            </div>
            <div className="mt-5">
              <p className="text-gray-600 text-md ">{product.product_desc}</p>
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex items-center">
                <StarRatings
                  rating={3}
                  starRatedColor="red"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0"
                />
                <p className="text-lg ml-3 text-black">4.8</p>
                <p className="text-sm ml-3 text-black cursor-pointer hover:text-primary-color transition ease-in-out duration-300">
                  1326 değerlendirme
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-10 items-center lg:flex-row flex-col">
              <p className="font-semibold text-black md:text-5xl text-3xl ">
                {product.price}₺
              </p>
              <div className="flex gap-5">
                <div className="flex items-center border-2 rounded-3xl px-2">
                  <button className="text-gray-400" onClick={minusQuantity}>
                    <BiMinus />
                  </button>
                  <p className="p-3 text-black font-semibold">{quantity}</p>
                  <button className="text-gray-400" onClick={plusQuantity}>
                    <BiPlus />
                  </button>
                </div>
                <button
                  className="flex items-center px-6 py-2 gap-4 text-white font-semibold  bg-primary-color hover:bg-yellow-700  rounded-3xl transition ease-out duration-300 disabled:opacity-50 disabled:bg-gray-400"
                  disabled={post_bag_loading}
                  onClick={() => sendProduct(product, quantity)}
                >
                  Sepete Ekle
                  <div className="w-8 h-8 bg-white text-black rounded-full flex justify-center items-center">
                    <BsPlusLg className="text-xs" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold">
          Bu ürünle ilgili 3024 değerlendirme var.
        </p>
        <div>
          <form onSubmit={commentSubmit}>
            <textarea
              name="comment"
              id=""
              cols="50"
              rows="5"
              className="border-2 rounded-xl p-4"
              placeholder="Yorumunuzu yazın"
              onChange={(e) => setCommentState(e.target.value)}
            ></textarea>
            <StarRatings
              rating={rating}
              starRatedColor="red"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="0"
              changeRating={(rating) => setRating(rating)}
            />
            <button
              type="submit"
              className="bg-primary-color text-white py-2 px-4 rounded-md"
            >
              Yorum Yap
            </button>
          </form>
        </div>
        {comment && <Comment comments={comment} />}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_PRODUCTS_SLUG });
  const paths = data.products.map((item) => {
    return { params: { slug: `${item.slug}` } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_FıLTER_SLUG_PRODUCTS,
    variables: { slug: params.slug.toString() },
  });

  return {
    props: {
      product: data.products[0],
    },
  };
}

export default Details;
