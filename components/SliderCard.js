import React from 'react'

const SliderCard = () => {
    return (
        <div className="mr-5 cursor-pointer">
            <div className="border-2 border-gray-100 rounded-lg hover:shadow-lg transition ease-out duration-300">
                <img src="product_img/pr1.jpg" alt="" className="mx-auto object-contain w-20" />
            </div>
            <div className="px-2 mt-3">
                <p className="font-semibold text-xl text-primary-color mt-3">1540 TL</p>
                <p className="text-sm">Asus ROG Zephyyurs GU603HE-K8007</p>
            </div>
        </div>

    )
}

export default SliderCard
