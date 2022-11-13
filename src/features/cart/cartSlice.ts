import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../interfaces";

const initialState: CartState = {
  total: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { price, quantity, id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      const data = { ...action.payload, price: price.substring(1) };

      const currentItem = state.items[itemIndex];
      if (currentItem === undefined) {
        state.items.push(data);
        state.total += parseFloat(data.price) * quantity;
        return;
      }

      const updatedQuantity = currentItem.quantity + quantity;
      state.items[itemIndex] = { ...data, quantity: updatedQuantity };
      state.total += parseFloat(data.price) * quantity;
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const cartItem = state.items.find((item) => item.id === id);
      const filteredItems = state.items.filter((item) => item.id !== id);

      if (cartItem) {
        state.items = filteredItems;
        state.total -= parseFloat(cartItem.price) * cartItem.quantity;
      }
    },
    increaseQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      state.items[itemIndex].quantity = quantity;
      state.total = state.items.reduce(
        (previousValue, { price, quantity }) =>
          previousValue + parseFloat(price) * quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions;
