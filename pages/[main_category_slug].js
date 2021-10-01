import React from 'react'
import ProductCard from '../components/ProductCard'
import client from '../apollo-client'
import { GET_FıLTER_MAINCATEGORY, GET_MAıNCATEGORY } from '../graphql/queries'
import productsSlice from '../redux/products/productsSlice'

const Products = ({ product }) => {
    return (
        <div className="container mx-auto">
            <div className="">
                {product.map(item => {
                    return (
                        <>
                            <div className="border-b-2">
                                <p className="font-bold text-3xl text-header-color mb-2 mt-10">{item.categoryName}</p>
                            </div>
                            {item.sub_categories.map(sub_item => {
                                return (
                                    <>
                                        <div className="mb-10 mt-10">
                                            <p className="font-bold text-2xl text-header-color mt-2">{sub_item.sub_category}</p>
                                        </div>
                                        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
                                            {sub_item.products.map(product => {
                                                return (
                                                    <ProductCard item={product} />
                                                )
                                            })}
                                        </div>
                                    </>
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_MAıNCATEGORY });
    const paths = data.mainCategories.map(item => {
        return { params: { main_category_slug: `${item.main_category_slug}` } }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { data } = await client.query({ query: GET_FıLTER_MAINCATEGORY, variables: { main_category_slug: params.main_category_slug.toString() } });
    return {
        props: {
            product: data.mainCategories[0].categories
        },
    };
}

export default Products