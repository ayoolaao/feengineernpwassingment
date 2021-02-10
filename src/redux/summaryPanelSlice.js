import { createSlice } from '@reduxjs/toolkit';

export const summaryPanelSlice = createSlice({
  name: 'summaryPanel',
  initialState: {
    panelIsActive: false,
    panelIsVisible: false,
    xyLocation: { x:0, y:0 },
  },
  reducers: {
    setPanelIsActive: (state, action) => {
      state.panelIsActive = action.payload;
    },
    setPanelIsVisible: (state, action) => {
      state.panelIsVisible = action.payload;
    },
    setXyLocation: (state, action) => {
      state.xyLocation = action.payload;
    },
  }
})

export const { setPanelIsActive, setPanelIsVisible, setXyLocation } = summaryPanelSlice.actions;

export const selectPanelIsActive = state => state.summaryPanelStore.panelIsActive;
export const selectPanelIsVisible = state => state.summaryPanelStore.panelIsVisible;
export const selectXyLocation = state => state.summaryPanelStore.xyLocation;

export default summaryPanelSlice.reducer;
