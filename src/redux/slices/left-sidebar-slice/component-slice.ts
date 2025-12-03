
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentsState, AvailableComponent } from '@/types'; 
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


    },
});

export const { addComponent } = componentsSlice.actions;
export default componentsSlice.reducer;      