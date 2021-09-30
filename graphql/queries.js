import { gql } from "@apollo/client"

const SING_IN = gql`
    mutation sign_in($email: String!, $password: String!){
        login(input: { identifier: $email , password: $password }) {
            jwt
        }
}`; 

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

const GET_PRODUCTS = `
    query get_products{
    products{
        product_name,
        price
    }
}
`

const GET_CATEGORY = `
query{
    categories{
      categoryName,
      products{
        product_name,
        product_desc,
        price,
        slug,
        image1{
        url,
        width,
        height,
      }
      }
    }
  }
`

const GET_MAıNCATEGORY = `
query{
	mainCategories{
    main_category,
    categories{
      categoryName,
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
}
`

const GET_OTHERCATEGORY = `
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


export {GET_PRODUCTS,ADD_PRODUCT,GET_MAıNCATEGORY,GET_CATEGORY,GET_OTHERCATEGORY};