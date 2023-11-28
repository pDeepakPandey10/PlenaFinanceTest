import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let temp = state.cart;
      if (temp.length > 0) {
        let isAvailable = temp.filter((x) => {
          if (!action.payload.value) {
            return x.value.id == action.payload.id
          } else {
            return x.value.id == action.payload.value.id
          }
        });
        if (isAvailable.length > 0) {
          isAvailable[0].count = isAvailable[0].count + 1;
        } else {
          temp.push({
            count: 1,
            value: action.payload
          });
        }
      } else {
        temp.push({
          count: 1,
          value: action.payload
        });
      }
      state.cart = temp;
    },
    removeFromCart: (state, action) => {
      let temp = state.cart;
      let selectedValue = temp.filter((x) => x.value.id == action.payload.value.id);
      if(selectedValue[0].count > 1) {
        selectedValue[0].count = selectedValue[0].count - 1;
      } else {
        let ind_x = temp.indexOf(selectedValue[0]);
        temp.splice(ind_x, 1);
      }
      state.cart = temp;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;