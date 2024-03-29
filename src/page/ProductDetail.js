import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faL } from "@fortawesome/free-solid-svg-icons";
import { faHeart as anotherFaHeart } from "@fortawesome/free-regular-svg-icons";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [detailSize, setDetailSize] = useState("");
  const [heartLike, setHeartLike] = useState(false);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="mt-5">
          <div className="product-title-like-area">
            <div className="basic-font product-title">{product?.title}</div>
            <button>
              {heartLike == false ? (
                <FontAwesomeIcon
                  icon={anotherFaHeart}
                  onClick={() => setHeartLike(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => setHeartLike(false)}
                />
              )}
            </button>
          </div>
          <h5 className="basic-font mt-1">&#8361;{product?.price}</h5>
          <div className="basic-font">
            {product?.choice == true ? "Conscious Choice" : ""}
          </div>
          <Dropdown className="size-toggle">
            <Dropdown.Toggle
              variant="Secondary"
              id="dropdown-basic"
              className="basic-font"
            >
              {detailSize == "" ? "사이즈 선택" : detailSize}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((size) => (
                  <Dropdown.Item
                    href="#/action-1"
                    className="basic-font"
                    onClick={() => setDetailSize(size)}
                  >
                    {size}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="detail-size-area">{detailSize}</div>

          <button className="add-button">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
