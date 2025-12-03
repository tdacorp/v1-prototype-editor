// store/rightSidebar/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RightSidebarState = {
  isOpen: boolean;
  selectedComponentId: string | null;
  activeTab: string; // example: "props", "layout", "styles"
};

const initialState: RightSidebarState = {
  isOpen: false,
  selectedComponentId: null,
  activeTab: "props",
};

const rightSidebarSlice = createSlice({
  name: "rightSidebar",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isOpen = true;
    },
    closeSidebar(state) {
      state.isOpen = false;
      state.selectedComponentId = null;
    },
    setSelectedComponentId(state, action: PayloadAction<string | null>) {
      state.selectedComponentId = action.payload;
      if (action.payload) state.isOpen = true;
    },
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  setSelectedComponentId,
  setActiveTab,
} = rightSidebarSlice.actions;

export default rightSidebarSlice.reducer;
