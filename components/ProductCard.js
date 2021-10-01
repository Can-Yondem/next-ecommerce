import StarRatings from 'react-star-ratings';
import Link from 'next/link';

const ProductCard = ({ item }) => {
    return (
        <div className="flex flex-col shadow-2xl rounded-2xl p-4 cursor-pointer">
            <Link href="/product/[slug]" as={`/product/${item.slug}`}>
                <div className="py-3">
                    <a>
                        <img src={item.image1[0] ? item.image1[0].url : "none.png"} alt="" className="object-contain w-52 mx-auto" />
                    </a>
                </div>
            </Link>
            <div>
                <p className="font-semibold sm:text-sm text-base text-center">{item.product_name}</p>
                <div className="flex mb-3 justify-center">
                    <StarRatings
                        rating={3}
                        starRatedColor="red"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="0"
                    />
                    <p className="text-sm mt-1">(150)</p>
                </div>
                <div>
                    <p className="font-bold text-2xl text-primary-color text-center">{item.price}₺</p>
                </div>
                <button className="text-white font-semibold bg-primary-color hover:bg-yellow-700 p-2 w-full rounded-xl mt-4 transition ease-out duration-300">Sepete Ekle</button>
            </div>
        </div>
    )
}

export default ProductCard
