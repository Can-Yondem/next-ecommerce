import React from 'react'
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
    return (
        <div className="flex flex-col shadow-2xl rounded-2xl p-4">
            <div className="py-3">
                <img src="product_img/pr1.jpg" alt="" className="object-contain w-32 mx-auto" />
            </div>
            <div>
                <p className="font-semibold sm:text-sm text-base text-center">Samsung Galaxy A51 256 GB (Samsung Türkiye Garantili)</p>
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
                    <p className="font-bold text-2xl text-primary-color text-center">3.451 TL</p>
                </div>
                <button className="text-white font-semibold bg-primary-color hover:bg-yellow-700 p-2 w-full rounded-xl mt-4 transition ease-out duration-300">Sepete Ekle</button>
            </div>
        </div>
    )
}

export default ProductCard
