import Head from 'next/head'
import MainCarousel from "../components/MainCarousel"
import Layout from '../components/Layout'
import Products from '../components/Products'
import CategoryCarousel from '../components/CategoryCarousel'

export default function Home() {
  return (
    <Layout>
      <MainCarousel />
      <div className="mt-16 container mx-auto">
        <div className="mb-16">
          <p className="font-bold text-4xl text-header-color mb-5">Çok Satanlar</p>
          <Products />
        </div>
        <div className="mb-16">
          <p className="font-bold text-4xl text-header-color mb-5">Elektronik</p>
          <CategoryCarousel />
        </div>
        <div className="mb-16">
          <p className="font-bold text-4xl text-header-color mb-5">Elektronik</p>
          <CategoryCarousel />
        </div>
        <div className="mb-16">
          <p className="font-bold text-4xl text-header-color mb-5">Elektronik</p>
          <CategoryCarousel />
        </div>
        <div className="mb-16">
          <p className="font-bold text-4xl text-header-color mb-5">Elektronik</p>
          <CategoryCarousel />
        </div>
      </div>



    </Layout>
  )
}
