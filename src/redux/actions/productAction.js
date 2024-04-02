function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type:"GET_PRODUCT_SUCCESS", payload : {data}})
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/legobitna/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
