import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // dispatch({type:"GET_PRODUCT_SUCCESS", payload : {data}})
//     dispatch(productActions.getAllProduct({ data }));
//   };
// }

// function getProductDetail(id) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getSingleProduct({data}))
//   };
// }

// export const productAction = { getProductDetail };
