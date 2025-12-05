import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PageMeta {
  id: string;
  name: string;
  slug: string;
  createdAt: number;
  updatedAt: number;
}

const initialState: PageMeta = {
  id: "",
  name: "",
  slug: "",
  createdAt: 0,
  updatedAt: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageMeta(state, action: PayloadAction<Partial<PageMeta>>) {
      return { ...state, ...action.payload };
    },
    resetPageMeta() {
      return initialState;
    },
    updateTimestamp(state) {
      state.updatedAt = Date.now();
    },
  },
});

export const { setPageMeta, resetPageMeta, updateTimestamp } =
  pageSlice.actions;
export default pageSlice.reducer;
