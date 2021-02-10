import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';
import summaryPanelReducer from './summaryPanelSlice';

export default configureStore({
  reducer: {
    ordersStore: ordersReducer,
    summaryPanelStore: summaryPanelReducer,
  }
});
