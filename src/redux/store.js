import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';

export default configureStore({
  reducer: { orders: ordersReducer }
});
