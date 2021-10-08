import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation {
    createProduct(
      input: {
        data: {
          product_name: "Samsung Galaxy Note 5"
          product_desc: "Telefon"
          price: 3500
          stock: 50
          category: "6152e0d1a58b23082c1e56d4"
        }
      }
    ) {
      product {
        product_name
        price
      }
    }
  }
`;

const GET_PRODUCTS_SLUG = gql`
  query get_products {
    products {
      slug
    }
  }
`;

const GET_FıLTER_SLUG_PRODUCTS = gql`
  query FilterSlug($slug: String!) {
    products(where: { slug: $slug }) {
      id
      product_name
      product_desc
      price
      image1 {
        url
        width
        height
      }
    }
  }
`;

const GET_SUBCATEGORY_AND_PRODUCTS = gql`
  query {
    subCategories {
      sub_category
      products {
        _id
        product_name
        product_desc
        price
        image1 {
          url
        }
      }
    }
  }
`;

const GET_MAıNCATEGORY = gql`
  query {
    mainCategories {
      main_category
      main_category_slug
    }
  }
`;

const GET_OTHERCATEGORY_AND_PRODUCTS = gql`
  query {
    otherCategories {
      other_category_name
      products {
        _id
        product_name
        product_desc
        price
        slug
        image1 {
          url
        }
      }
    }
  }
`;

const GET_FıLTER_MAINCATEGORY = gql`
  query filterMainCategory($main_category_slug: String!) {
    mainCategories(where: { main_category_slug: $main_category_slug }) {
      main_category
      main_category_slug
      categories {
        categoryName
        sub_categories {
          sub_category
          products {
            _id
            product_name
            price
            slug
            image1 {
              url
            }
          }
        }
      }
    }
  }
`;

const POST_BAG = gql`
  mutation bagg($quantity: Int!, $product_id: ID!, $price: Float!, $user: ID!) {
    createBagg(
      input: {
        data: {
          quantity: $quantity
          product: $product_id
          price: $price
          user: $user
        }
      }
    ) {
      bagg {
        id
        price
        quantity
        product {
          product_name
          price
          image1 {
            url
          }
        }
      }
    }
  }
`;

const GET_BAG = gql`
  query {
    baggs(where: {isOrdered:false}) {
      id
      price
      quantity
      product {
        product_name
        price
        image1 {
          url
        }
      }
    }
  }
`;

const DELETE_BAG_PRODUCT = gql`
  mutation deleteBag($id: ID!) {
    deleteBagg(input: { where: { id: $id } }) {
      bagg {
        price
      }
    }
  }
`;

const UPDATE_PRODUCT_QUANTITY = gql`
  mutation updateBag($id: ID!, $quantity: Int!, $price: Float!) {
    updateBagg(
      input: {
        where: { id: $id }
        data: { quantity: $quantity, price: $price }
      }
    ) {
      bagg {
        quantity
      }
    }
  }
`;

const CREATE_ORDER = gql`
  mutation createOrder($user_id: ID!, $baggs: [ID!], $total_price: Float!) {
    createOrder(input: { data: { user: $user_id, baggs: $baggs, total_price: $total_price } }) {
      order {
        id
      }
    }
  }
`;

const GET_ORDER = gql`
query{
  orders{
    id,
    createdAt,
    status,
    total_price,
    user{
        name,
        surname
      },
    baggs{
      quantity,
      price,
      product{
        product_name,
        image1{
          url
        }
      }
    }
  }
}
`;

const UPDATE_BAG_ISORDERED = gql`
mutation update_isordered($id: ID!, $isOrdered: Boolean!){
  updateBagg(input: {where: {id: $id} data:{isOrdered: $isOrdered}}){
    bagg{isOrdered}
  }
}
`

export {
  GET_PRODUCTS_SLUG,
  GET_SUBCATEGORY_AND_PRODUCTS,
  ADD_PRODUCT,
  GET_MAıNCATEGORY,
  GET_OTHERCATEGORY_AND_PRODUCTS,
  GET_FıLTER_SLUG_PRODUCTS,
  GET_FıLTER_MAINCATEGORY,
  GET_BAG,
  POST_BAG,
  DELETE_BAG_PRODUCT,
  UPDATE_PRODUCT_QUANTITY,
  CREATE_ORDER,
  UPDATE_BAG_ISORDERED,
  GET_ORDER
};
