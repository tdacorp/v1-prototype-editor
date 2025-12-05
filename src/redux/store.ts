import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/slices/left-sidebar-slice/component-slice";
import canvasReducer from "@/redux/slices/canvas/slice";
import rightSidebarReducer from "@/redux/slices/rightSidebar/slice";
import pageReducer from "@/redux/slices/page/slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    canvas: canvasReducer,
    rightSidebar: rightSidebarReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
