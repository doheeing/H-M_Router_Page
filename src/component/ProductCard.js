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
      <div className="product-card-comment">
      <h6 className="basic-font product-card-hover">{item?.title}</h6>
      <h6 className="basic-font-conscious-main">{item?.choice==true?"Conscious Choice":""}</h6>
      </div>
      <div className="basic-font-price">&#8361;{item?.price.toLocaleString()}</div>
      <div className="basic-font-new mb-1">{item?.new==true?"신제품":""}</div>

    </div>
  );
};

export default ProductCard;
