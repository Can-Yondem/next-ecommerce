import React from "react";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProductSkeleton from "../../loaders/ProductSkeleton";
import Image from "next/image";

const CategoryCarousel = ({ productitem }) => {
  const loading = useSelector((state) => state.products.loading);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrNext
        className={className}
        style={{ ...style, marginTop: "-40px" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrPrevious
        className={className}
        style={{ ...style, marginTop: "-40px" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {productitem.map((item, index) => {
          const myLoader = ({ src }) => {
            return item.image1 ? item.image1.url : "none.png";
          };
          return (
            <div key={index}>
              {loading ? (
                <ProductSkeleton />
              ) : (
                <div className="mr-5 cursor-pointer">
                  <Link href="/product/[slug]" as={`/product/${item.slug}`}>
                    <a>
                      <div className="border-2 border-gray-100 rounded-lg hover:shadow-lg transition ease-out duration-300 flex justify-center mr-5 ml-5">
                        <Image
                          loader={myLoader}
                          src={item.image1 ? item.image1.url : "none.png"}
                          alt=""
                          height="200"
                          width="200"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="px-8 mt-3">
                    <p className="font-semibold text-xl text-primary-color mt-3">
                      {item.price}???
                    </p>
                    <p className="text-sm">{item.product_name}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
