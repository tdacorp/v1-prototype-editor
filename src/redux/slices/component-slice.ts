
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentsState, AvailableComponent } from '../../types'; 
import { COMPONET_REGISTRY } from '@/data/component-registry';

const initialState: ComponentsState = {
    availableComponents: COMPONET_REGISTRY,
   selectedCanvasItemId: null,
};

const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        addComponent: (state, action: PayloadAction<AvailableComponent>) => {
            state.availableComponents.push(action.payload);
        },

         setSelectedCanvasItemId: (state, action: PayloadAction<string | null>) => {
            state.selectedCanvasItemId = action.payload;
        },

    },
});

export const { addComponent,  setSelectedCanvasItemId } = componentsSlice.actions;
export default componentsSlice.reducer;      