// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//     emptyCart: (state) => {
//       state.items = [];
//     },
//     // Add more reducers as needed, such as remove from cart, update quantity, etc.
//   },
// });

// export const { addToCart, emptyCart } = cartSlice.actions;
// export const selectCartItems = (state) => state.cart.items;

// export default cartSlice.reducer;

// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { userId } = action.payload;
        console.log(action.payload.product);
      const productId = action.payload.product._id;
      // Check if the product already exists in the user's cart
      const existingProductIndex = state.items.findIndex(
        (item) => item.product._id === productId && item.userId === userId
      );
      if (existingProductIndex !== -1) {
        // Product already exists, you can update quantity here if needed
        // For now, let's just ignore adding duplicate products
        console.log("Product already added to the redux");
        toast.error("Product already added to the Cart" , {
            autoClose:1000
        })
        return;
      }
      
      // Product doesn't exist, add it to the cart
      state.items.push(action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );
    },
    // Add more reducers as needed, such as remove from cart, update quantity, etc.
  },
});

export const { addToCart, emptyCart , removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
