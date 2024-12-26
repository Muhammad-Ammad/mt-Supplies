import { createSlice } from "@reduxjs/toolkit";
export interface Product {
  id: string,
  quantity: number,
  Name: string,
  price: string,
  paragaraph: string,
  imgSrc: string,
  isSpecial: boolean,
  specialText: string,
  isDiscount: boolean,
}

interface State {
  userInfo: any[],
  products: Product[],
  productDetails: Product[],
  BreadValue: Array<[]>,
}
const initialState: State = {
  userInfo: [],
  BreadValue: [],
  products: [
    {
      id: '',
      quantity: 0,
      Name: '',
      price: '',
      paragaraph: '',
      imgSrc: '',
      isSpecial: false,
      specialText: '',
      isDiscount: false,
    },
  ],
  productDetails: [],
};

export const mtSupplies = createSlice({
  name: "mtSupplies",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartState = JSON.parse(JSON.stringify(state.products));
      const index = cartState.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    setProductDetail: (state, action) => {
      const actionArray = JSON.parse(JSON.stringify(action.payload));
      state.productDetails = [actionArray];
    },
    increaseProductDetailQuantity: (state, action) => {
      const item = state.productDetails.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseProductDetailQuantity: (state, action) => {
      const item = state.productDetails.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    removeProductDetail: (state) => {
      state.productDetails = [];
    },
    setBreadCrumb: (state, action) => {
      state.BreadValue = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  setProductDetail,
  increaseProductDetailQuantity,
  drecreaseProductDetailQuantity,
  removeProductDetail,
  setBreadCrumb,
} = mtSupplies.actions;
export default mtSupplies.reducer;
