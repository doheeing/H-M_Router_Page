import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const navigate = useNavigate();
  const productList = useSelector((state)=>state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery))
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="mt-3">
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} md={6} sm={12}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
