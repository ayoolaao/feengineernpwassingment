import { createSlice } from '@reduxjs/toolkit';
import getOrdersResponseMock from '../mockData/orders.json';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {},
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrderId = action.payload
    },
  }
});

export const { setOrders, setSelectedOrder } = ordersSlice.actions;

export const fetchOrders = () => dispatch => {
  setTimeout(() => {
    dispatch(setOrders(getOrdersResponseMock))
  }, 500);
};

export const ordersSelector = state => state.ordersStore.orders;
export const selectedOrderIdSelector = state => state.ordersStore.selectedOrderId;

export default ordersSlice.reducer;
