import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={200}
    viewBox="0 0 500 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#e4e2e2"
    {...props}
  >
    <rect x="22" y="169" rx="3" ry="3" width="315" height="11" /> 
    <rect x="18" y="13" rx="0" ry="0" width="318" height="143" /> 
    <rect x="22" y="187" rx="3" ry="3" width="315" height="11" />
  </ContentLoader>
)

export default ProductSkeleton

