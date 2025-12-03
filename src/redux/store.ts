import { configureStore } from "@reduxjs/toolkit";
import componentsReducer from "./slices/left-sidebar-slice/component-slice";
import canvasReducer from "@/redux/slices/canvas/slice";
import rightSidebarReducer from "@/redux/slices/rightSidebar/slice";

export const store = configureStore({
  reducer: {
    components: componentsReducer,
    canvas: canvasReducer,
    rightSidebar: rightSidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
