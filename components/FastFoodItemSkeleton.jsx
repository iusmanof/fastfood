import React from "react"
import ContentLoader from "react-content-loader"

const FastFoodItemSkeleton = ({id }) => (
  <ContentLoader 
    key={id}
    speed={2}
    width={170}
    height={340}
    viewBox="0 0 170 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="93" cy="63" r="61" /> 
    <rect x="26" y="139" rx="0" ry="0" width="138" height="14" /> 
    <rect x="212" y="141" rx="0" ry="0" width="1" height="0" /> 
    <rect x="26" y="170" rx="0" ry="0" width="139" height="17" /> 
    <rect x="27" y="201" rx="0" ry="0" width="140" height="19" />
  </ContentLoader>
)

export default FastFoodItemSkeleton

