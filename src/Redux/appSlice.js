import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
};

export const appSlice = createSlice({
  name: "Horus",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1, ...rest } = action.payload; // Default quantity: 1
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity; // Increment existing item's quantity
      } else {
        state.products.push({ 
          id, 
          quantity, 
          ...rest, // Spread other item properties (name, price, image, etc.)
        });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity); // Prevent quantity < 1
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart 
} = appSlice.actions;

export default appSlice.reducer;