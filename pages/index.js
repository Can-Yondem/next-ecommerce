import Head from 'next/head'
import MainCarousel from "../components/MainCarousel"
import Layout from '../components/Layout'
import Products from '../components/Products'
import CategoryCarousel from '../components/CategoryCarousel'
import { useDispatch, useSelector } from "react-redux"
import { get_subcategory, get_othercategory } from "../redux/products/productsSlice"
import { useEffect, useState } from "react"
import { getRandomCategories } from '../utils/randomCategories'




export default function Home() {
  const dispatch = useDispatch();
  const subcategory = useSelector((state) => state.products.subcategory);
  const otherCategory = useSelector((state) => state.products.otherCategory);
  const loading = useSelector((state) => state.products.loading);
  const [randomCategories, setRandomCategories] = useState(null);

  useEffect(() => {
    dispatch(get_subcategory());
    dispatch(get_othercategory());
  }, [dispatch]);

  //setRandomCategories(getRandomCategories(subcategory.length, subcategory, 3));
  if (!otherCategory) return null;
  //if (!randomCategories) return null;
  //if (!subcategory) return null;

  /*
  * Fonksiyon parametreleri (Rasgele sayının maksimum değeri, ürün dizisi, dizi kaç parametreli dönsün)
  */


  //<CategoryCarousel productitem={item.products} />
  /*          <div className="mb-16">
            <p className="font-bold text-4xl text-header-color mb-5">Çok Satanlar</p>
            <Products />
          </div>
          */

          /* 
        {randomCategories.map((item,index) => {
            return (
              <div className="mb-16" key={index}>
                <p className="font-bold text-4xl text-header-color mb-5 ml-4 ">{item.sub_category}</p>
                <CategoryCarousel productitem={item.products} />
              </div>
            )
          })} */

  return (
    <>
      <MainCarousel />
        <div className="mt-16 container mx-auto">

          {otherCategory.map((item,index) => {
            return (
              <div className="mb-16" key={index}>
                <p className="font-bold text-4xl text-header-color mb-5 ml-4 ">{item.other_category_name}</p>
                <CategoryCarousel productitem={item.products} />
              </div>
            )
          })}

        </div>
    </>
  )
}
