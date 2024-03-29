import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} height={500} className="product-card-hover"/>
      <div className="basic-font-conscious">{item?.choice==true?"Conscious Choice":""}</div>
      <h6 className="basic-font product-card-hover">{item?.title}</h6>
      <div className="basic-font-price">&#8361;{item?.price}</div>
      <div className="basic-font-new">{item?.new==true?"신제품":""}</div>
    </div>
  );
};

export default ProductCard;
