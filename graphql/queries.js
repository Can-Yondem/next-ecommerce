import { gql } from "@apollo/client"

const ADD_PRODUCT = gql`
    mutation{
    createProduct(input: {data: {product_name:"Samsung Galaxy Note 5",product_desc:"Telefon",price:3500,stock:50,category:"6152e0d1a58b23082c1e56d4"}}){
        product{
        product_name,
        price,
        }
    }
    }
`

const GET_PRODUCTS_SLUG = gql`
    query get_products{
    products{
      slug
    }
}
`

const GET_FıLTER_SLUG_PRODUCTS = gql`
query FilterSlug ($slug: String!){
    products(where:{slug: $slug}){
      product_name,
      product_desc,
      price,
      image1{
        url,
        width,
        height,
      }
    }
  }
`;

const GET_SUBCATEGORY_AND_PRODUCTS = gql`
query{
subCategories{
  sub_category,
  products{
    product_name,
    product_desc,
    price,
    image1{
      url
    }
  }
}
}
`

const GET_MAıNCATEGORY = gql`
query{
	mainCategories{
    main_category,
    main_category_slug
  }
}
`

const GET_OTHERCATEGORY_AND_PRODUCTS = gql`
query{
	otherCategories{
    other_category_name,
    products{
      product_name,
      product_desc,
      price,
      slug,
      image1{
        url
      }
    }
  }
}
`

const GET_FıLTER_MAINCATEGORY = gql`
query filterMainCategory($main_category_slug: String!){
mainCategories(where:{main_category_slug: $main_category_slug}){
  main_category,
  main_category_slug,
  categories{
  categoryName,
  sub_categories{
    sub_category,
    products{
      product_name,
      price,
      slug,
      image1{
        url
      }
    }
  }
}
}
}`


export {
  GET_PRODUCTS_SLUG,
  GET_SUBCATEGORY_AND_PRODUCTS,
  ADD_PRODUCT,
  GET_MAıNCATEGORY,
  GET_OTHERCATEGORY_AND_PRODUCTS,
  GET_FıLTER_SLUG_PRODUCTS,
  GET_FıLTER_MAINCATEGORY
};