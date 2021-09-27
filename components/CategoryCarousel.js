import React from 'react'
import Slider from "react-slick"
import SliderCard from './SliderCard';

const CategoryCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>

            </Slider>

        </div>
    )
}

export default CategoryCarousel
