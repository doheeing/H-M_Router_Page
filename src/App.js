import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./page/LoginPage";
import ProductAll from "./page/ProductAll";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인페이지, 상품상세 페이지 만들기
//1-1. 네비게이션바를 만들기
// 2. 전체상품페이지에서는 전체상품을 볼 수 있다
// 3. 로그인버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테일을 눌렀으나 로그인이 안되어 있으면 로그인 페이지가 나온다
// 5. 로그인이 되어있을 경우에는 상품디테일 페이지를 볼 수 있다
// 6. 로그아웃버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다
// 8. 로그인하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 9. 상품을 검색할 수 있다

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
