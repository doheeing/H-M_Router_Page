import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faBagShopping,
  faRuler,
  faEnvelope,
  faStore,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as anotherFaHeart } from "@fortawesome/free-regular-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/reducers/productDetailSlice";

const ProductDetail = () => {
  let { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [detailSize, setDetailSize] = useState("");
  const [heartLike, setHeartLike] = useState(false);
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
    console.log("data", product);
  };

  const radios = [
    { name: "S", value: "1" },
    { name: "M", value: "2" },
    { name: "L", value: "3" },
  ];
  useEffect(() => {
    getProductDetail();
  });
  return (
    <Container>
      <Row className="mt-3">
        <Col className="product-img" lg={6} md={6} sm={12}>
          <img src={product?.img} />
        </Col>
        <Col className="mt-5" lg={6} md={6} sm={12}>
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
          <h5 className="basic-font mt-1">
            &#8361;{product?.price.toLocaleString()}
          </h5>
          <div className="basic-font-conscious">
            {product?.choice == true ? "Conscious Choice" : ""}
          </div>
          <ButtonGroup className="mt-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => setDetailSize(radio.name)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <div className="more-info">
            <button>
              <FontAwesomeIcon icon={faRuler} className="mx-1" />
              사이즈 가이드
            </button>
            <button>
              <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
              원하는 사이즈가 품절인가요?
            </button>
          </div>
          {/* <div className="detail-size-area">{detailSize}</div> */}
          <div className="detail-button mt-3">
            <Button variant="primary">
              <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
              장바구니에 추가
            </Button>
            <Button variant="dark">
              <FontAwesomeIcon icon={faBagShopping} className="mx-2" /> 바로
              구매하기
            </Button>
          </div>
          <div className="delivery-area">
            <div className="store-info">
              <FontAwesomeIcon icon={faStore} className="mx-2" /> 매장내 재고
              없음
            </div>
            <div>
              <FontAwesomeIcon icon={faCircleInfo} className="mx-2" /> 배송
              기간: 영업일 기준 2-3일
            </div>
            <button>배송 및 결제</button>
          </div>
          <Accordion className="mt-5 mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion">
                설명 & 핏
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion">
              <Accordion.Header>소재</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion">
              <Accordion.Header>케어 가이드</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
