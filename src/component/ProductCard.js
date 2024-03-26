import React from "react";

const ProductCard = ({item}) => {
  return (
    <div className="product-card">
      <img src={item?.img} height={500}/>
      <div>{item?.choice==true?"Conscious Choice":""}</div>
      <h6>{item?.title}</h6>
      <div>&#8361;{item?.price}</div>
      <div>{item?.new==true?"신제품":""}</div>
    </div>
  );
};

export default ProductCard;
