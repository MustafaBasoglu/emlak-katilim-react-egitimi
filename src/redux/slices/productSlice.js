import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return data;
});

const productSlice = createSlice({
  name: "theme",
  initialState: {
    productData: [],
    loading: "idle", // idle || loading || succeeded || failed
    error: null,
  },
  reducers: {
    addNewProduct: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchProduts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProduts.rejected, (state, action) => {
        state.state = "failed";
        state.error = action.payload;
      });
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
