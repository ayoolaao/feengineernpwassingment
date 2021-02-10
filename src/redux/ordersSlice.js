import { createSlice } from '@reduxjs/toolkit';
import getOrdersResponseMock from '../mockData/orders.json';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {},
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    }
  }
});

const { setOrders } = ordersSlice.actions;

export const fetchOrders = () => dispatch => {
  setTimeout(() => {
    dispatch(setOrders(getOrdersResponseMock))
  }, 500);
};

export default ordersSlice.reducer;
