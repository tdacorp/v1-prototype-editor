// store/canvas/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentInstance } from "./types";

type CanvasState = {
  components: ComponentInstance[];
};

const initialState: CanvasState = {
  components: [],
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setComponents(state, action: PayloadAction<ComponentInstance[]>) {
      state.components = action.payload;
    },

    addComponent(state, action: PayloadAction<ComponentInstance>) {
      state.components.push(action.payload);
    },

    updateComponentProps(
      state,
      action: PayloadAction<{ id: string; props: Record<string, any> }>
    ) {
      const { id, props } = action.payload;
      const idx = state.components.findIndex((c) => c.id === id);

      if (idx >= 0) {
        state.components[idx] = {
          ...state.components[idx],
          props: { ...state.components[idx].props, ...props },
        };
      }
    },

    removeComponent(state, action: PayloadAction<string>) {
      state.components = state.components.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const {
  setComponents,
  addComponent,
  updateComponentProps,
  removeComponent,
} = canvasSlice.actions;

export default canvasSlice.reducer;
