import { gql } from "@apollo/client";

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
      comments {
        id
        comment
        createdAt
        user {
          id
          name
          surname
        }
        rating
      }
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
      id
      main_category
      main_category_slug
      categories {
        id
      }
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
    baggs(where: { isOrdered: false }) {
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
        id
        price
        quantity
      }
    }
  }
`;

const CREATE_ORDER = gql`
  mutation createOrder($user_id: ID!, $baggs: [ID!], $total_price: Float!) {
    createOrder(
      input: {
        data: { user: $user_id, baggs: $baggs, total_price: $total_price }
      }
    ) {
      order {
        id
      }
    }
  }
`;

const GET_ORDER = gql`
  query {
    orders {
      id
      createdAt
      updatedAt
      status
      total_price
      user {
        name
        surname
      }
      baggs {
        quantity
        price
        product {
          product_name
          image1 {
            url
          }
        }
      }
    }
  }
`;

const UPDATE_BAG_ISORDERED = gql`
  mutation update_isordered($id: ID!, $isOrdered: Boolean!) {
    updateBagg(input: { where: { id: $id }, data: { isOrdered: $isOrdered } }) {
      bagg {
        isOrdered
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query {
    products {
      id
      product_name
      slug
      image1 {
        url
      }
    }
  }
`;

const FIND_USERNAME = gql`
  query findUsername($username: String!) {
    users(where: { username: $username }) {
      id
    }
  }
`;

const ADD_MAINCATEGORY = gql`
  mutation addMainCategory($category_name: String!) {
    createMainCategory(input: { data: { main_category: $category_name } }) {
      mainCategory {
        id
        main_category
      }
    }
  }
`;

const DELETE_MAINCATEGORY = gql`
  mutation deleteMainCategory($category_id: ID!) {
    deleteMainCategory(input: { where: { id: $category_id } }) {
      mainCategory {
        _id
      }
    }
  }
`;

const GET_CATEGORY = gql`
  query {
    categories {
      id
      categoryName
      main_category {
        id
        main_category
      }
      sub_categories {
        id
        sub_category
      }
    }
  }
`;

const GET_SUBCATEGORY = gql`
  query {
    subCategories {
      id
      sub_category
      category {
        id
        categoryName
      }
    }
  }
`;

const ADD_CATEGORY = gql`
  mutation addCategory($category_name: String!, $main_category_id: ID!) {
    createCategory(
      input: {
        data: { categoryName: $category_name, main_category: $main_category_id }
      }
    ) {
      category {
        id
        categoryName
        main_category {
          id
          main_category
        }
      }
    }
  }
`;

const DELETE_CATEGORY = gql`
  mutation addCategory($category_id: ID!) {
    deleteCategory(input: { where: { id: $category_id } }) {
      category {
        id
      }
    }
  }
`;

const ADD_SUBCATEGORY = gql`
  mutation addSubCategory($category_name: String!, $category_id: ID!) {
    createSubCategory(
      input: { data: { sub_category: $category_name, category: $category_id } }
    ) {
      subCategory {
        id
        sub_category
        category {
          id
          categoryName
        }
      }
    }
  }
`;

const DELETE_SUBCATEGORY = gql`
  mutation deleteSubCategory($category_id: ID!) {
    deleteSubCategory(input: { where: { id: $category_id } }) {
      subCategory {
        id
      }
    }
  }
`;

const GET_PRODUCTS_LIMIT = gql`
  query getProducts($limit: Int!, $start: Int!) {
    products(limit: $limit, start: $start, sort: "createdAt:desc") {
      id
      product_name
      product_desc
      price
      trademark
      sub_category {
        sub_category
      }
      image1 {
        url
      }
    }
  }
`;

const PRODUCTS_COUNT = gql`
  query {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

const GET_IMAGE = gql`
  query getImage {
    image {
      base64
    }
  }
`;

const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $desc: String!
    $tradeMark: String!
    $price: Float!
    $stock: Int!
    $subCategory: ID!
    $image1: Upload!
  ) {
    createProduct(
      input: {
        data: {
          product_name: $name
          product_desc: $desc
          price: $price
          stock: $stock
          trademark: $tradeMark
          sub_category: $subCategory
          image1: $image1
        }
      }
    ) {
      product {
        id
        product_name
        product_desc
        price
        stock
        trademark
        sub_category {
          id
          sub_category
        }
      }
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(input: { where: { id: $id } }) {
      product {
        id
      }
    }
  }
`;

const UPDATE_MAINCATEGORY = gql`
  mutation updateMainCategory($category: String!, $id: ID!) {
    updateMainCategory(
      input: { where: { id: $id }, data: { main_category: $category } }
    ) {
      mainCategory {
        id
        main_category
      }
    }
  }
`;

const UPDATE_CATEGORY = gql`
  mutation updateCategory($category: String!, $main_category: ID!, $id: ID!) {
    updateCategory(
      input: {
        where: { id: $id }
        data: { categoryName: $category, main_category: $main_category }
      }
    ) {
      category {
        id
        categoryName
        main_category {
          id
          main_category
        }
      }
    }
  }
`;

const UPDATE_SUBCATEGORY = gql`
  mutation ($sub_category: String!, $category: ID!, $id: ID!) {
    updateSubCategory(
      input: {
        where: { id: $id }
        data: { sub_category: $sub_category, category: $category }
      }
    ) {
      subCategory {
        id
        sub_category
        category {
          id
          categoryName
        }
      }
    }
  }
`;

const UPDATE_ORDER = gql`
  mutation updateOrder($id: ID!, $status: ENUM_ORDER_STATUS!) {
    updateOrder(input: { where: { id: $id }, data: { status: $status } }) {
      order {
        id
        createdAt
        updatedAt
        status
      }
    }
  }
`;

const IMAGE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    upload(file: $file) {
      id
    }
  }
`;

const DELETE_ORDER = gql`
  mutation deleteOrder($id: ID!) {
    deleteOrder(input: { where: { id: $id } }) {
      order {
        id
      }
    }
  }
`;

const ADD_COMMENT = gql`
  mutation addComment(
    $comment: String!
    $rating: Int!
    $product: ID!
    $user: ID!
  ) {
    createComment(
      input: {
        data: {
          comment: $comment
          rating: $rating
          product: $product
          user: $user
        }
      }
    ) {
      comment {
        id
        comment
        updatedAt
        rating
        user {
          id
          name
          surname
        }
        product {
          id
        }
      }
    }
  }
`;

const GET_COMMENT = gql`
  query getComment($id: ID!) {
    products(where: { id: $id }) {
      id
      comments {
        id
        comment
        user {
          name
          surname
        }
        rating
        updatedAt
      }
    }
  }
`;

export {
  GET_PRODUCTS_SLUG,
  GET_SUBCATEGORY_AND_PRODUCTS,
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
  GET_ORDER,
  GET_PRODUCTS,
  FIND_USERNAME,
  ADD_MAINCATEGORY,
  DELETE_MAINCATEGORY,
  GET_CATEGORY,
  GET_SUBCATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_SUBCATEGORY,
  DELETE_SUBCATEGORY,
  GET_PRODUCTS_LIMIT,
  PRODUCTS_COUNT,
  GET_IMAGE,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_MAINCATEGORY,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  IMAGE_UPLOAD,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_COMMENT,
  GET_COMMENT,
};
