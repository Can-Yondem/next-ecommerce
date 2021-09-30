import Head from 'next/head'
import MainCarousel from "../components/MainCarousel"
import Layout from '../components/Layout'
import Products from '../components/Products'
import CategoryCarousel from '../components/CategoryCarousel'
import { useDispatch, useSelector } from "react-redux"
import { get_category, get_othercategory } from "../redux/products/productsSlice"
import { useEffect } from "react"
import { getRandomCategories } from '../utils/randomCategories'




export default function Home() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.category);
  const otherCategory = useSelector((state) => state.products.otherCategory);
  const loading = useSelector((state) => state.products.loading);
  let randomCategories = [];

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_othercategory());
  }, [dispatch])


  if (!category) return null;
  if (!otherCategory) return null;
  //randomCategories = getRandomCategories(category.length, category, 3);
  //if (!randomCategories) return null;
  /*
  * Fonksiyon parametreleri (Rasgele sayının maksimum değeri, ürün dizisi, dizi kaç parametreli dönsün)
  */


  //<CategoryCarousel productitem={item.products} />
  /*          <div className="mb-16">
            <p className="font-bold text-4xl text-header-color mb-5">Çok Satanlar</p>
            <Products />
          </div>
          */

  return (
    <>
      <Layout>
      <MainCarousel />
        <div className="mt-16 container mx-auto">

          {otherCategory.map(item => {
            return (
              <div className="mb-16">
                <p className="font-bold text-4xl text-header-color mb-5 ml-4 ">{item.other_category_name}</p>
                <CategoryCarousel productitem={item.products} />
              </div>
            )
          })}

          {randomCategories.map(item => {
            console.log(item);
            return (
              <div className="mb-16">
                <p className="font-bold text-4xl text-header-color mb-5">{item.categoryName}</p>
                <CategoryCarousel productitem={item.products} />
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  )
}
