import { GET_FıLTER_SLUG_PRODUCTS, GET_PRODUCTS_SLUG } from '../../graphql/queries';
import StarRatings from 'react-star-ratings';
import { FiShoppingCart } from 'react-icons/fi'
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import client from "../../apollo-client";

const uri = 'http://localhost:1337/graphql';

const Details = ({ product }) => {
    return (
        <div className="sm:flex h-almost">
            <div className="2xl:w-8/12 xl:w-7/12 lg:w-6/12 md:w-6/12 sm:w-6/12 p-4 flex items-center">
                <img src={product[0].image1[0] ? product[0].image1[0].url : "none.png"} alt="" className="mx-auto sm:w-96 w-60" />
            </div>
            <div className="2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-6/12 sm:w-6/12 border-l-2 lg:px-20 px-8 py-4 bg-secondary-color flex items-center">
                <div>
                    <p className="font-bold md:text-3xl text-2xl text-gray-100">{product[0].product_name}</p>
                    <div className="flex justify-between mt-10">
                        <p className="font-semibold text-primary-color md:text-4xl text-3xl ">{product[0].price}₺</p>
                        <div className="flex">
                            <StarRatings
                                rating={3}
                                starRatedColor="red"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="0"
                            />
                            <p className="text-lg ml-3 text-gray-100">4.8</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="border-b-2 border-gray-500 font-semibold text-xl pb-1 mb-1 text-gray-100">Açıklama</p>
                        <p className="text-gray-400">{product[0].product_desc}</p>
                    </div>
                    <div className="flex justify-between mt-10 px-8 items-center lg:flex-row flex-col">
                        <div className="flex items-center w-24">
                            <BiMinus className="text-gray-100 text-2xl" />
                            <p className="px-3 bg-secondary-color text-gray-100 text-2xl " > 11</p>
                            <BiPlus className="text-gray-100 text-2xl " />
                        </div>
                        <button className="flex items-center gap-3 md:px-10 px-5 text-white font-semibold  bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300 "> <FiShoppingCart className="text-xl" />Sepete Ekle</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export async function getStaticPaths() {
    const { data } = await client.query({query:GET_PRODUCTS_SLUG});
    const paths = data.products.map(item => {
        return { params: { slug: `${item.slug}` } }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const { data } = await client.query({query:GET_FıLTER_SLUG_PRODUCTS,variables:{slug: params.slug.toString()}});

    return {
      props: {
        product: data.products
      },
   };
}

export default Details

