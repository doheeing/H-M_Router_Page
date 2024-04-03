import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  //동기적으로 자신의 state를 바꾸는 경우 (dispatch 해서 리덕스가 직접적으로 호출하는 케이스)
  reducers: {
    // getAllProduct(state, action) {
    //   state.productList = action.payload.data;
    // },
    // getSingleProduct(state, action) {
    //   state.selectedItem = action.payload.data;
    // },
  },
  //외부로부터 state가 바뀌는 경우, 비동기케이스 주로 처리 (외부 라이브러리에 의해서 호출이 되는 케이스)
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const fetchProductDetail = createAsyncThunk(
//   "product/fetchDetail",
//   async (id, thunkApi) => {
//     try {
//       let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products/${id}`;
//       let response = await fetch(url);
//       return await response.json();
      
//     } catch (error) {
//       thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// const productDetailSlice = createSlice({
//   name: "productDetail",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProductDetail.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchProductDetail.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.selectedItem = action.payload;
//       })
//       .addCase(fetchProductDetail.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

export default productSlice.reducer;


// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;
