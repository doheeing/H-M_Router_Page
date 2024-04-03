import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};


export const fetchProductDetail = createAsyncThunk(
    "product/fetchDetail",
    async (id, thunkApi) => {
      try {
        let url = `https://my-json-server.typicode.com/doheeing/H-M_Router_Page/products/${id}`;
        let response = await fetch(url);
        return await response.json();
        
      } catch (error) {
        thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductDetail.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchProductDetail.fulfilled, (state, action) => {
          state.isLoading = false;
          state.selectedItem = action.payload;
        })
        .addCase(fetchProductDetail.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });

  export default productDetailSlice.reducer;