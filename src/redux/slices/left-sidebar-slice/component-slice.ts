
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ComponentsState, AvailableComponent } from '@/types'; 
// import { COMPONENT_REGISTRY } from '@/data/component-registry';

// const initialState: ComponentsState = {
//     availableComponents: COMPONENT_REGISTRY,
//    selectedCanvasItemId: null,
// };

// const componentsSlice = createSlice({
//     name: 'components',
//     initialState,
//     reducers: {
//         addComponent: (state, action: PayloadAction<AvailableComponent>) => {
//             state.availableComponents.push(action.payload);
//         },


//     },
// });

// export const { addComponent } = componentsSlice.actions;
// export default componentsSlice.reducer;      


// slices/left-sidebar-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SidebarState, SidebarCategory, SidebarComponent, SidebarVariant } from './types/sidebar';
import { COMPONENT_REGISTRY } from '@/data/component-registry';

function mapRegistryToSidebar(): SidebarCategory[] {
  const categoriesMap: Record<string, SidebarCategory> = {};

  COMPONENT_REGISTRY.forEach(comp => {
    const categoryId = comp.category || 'uncategorized';

    if (!categoriesMap[categoryId]) {
      categoriesMap[categoryId] = {
        id: categoryId,
        name: comp.category || 'Uncategorized',
        components: []
      };
    }

    const sidebarComp: SidebarComponent = {
      id: comp.id,
      name: comp.name,
      icon: comp.icon, // string | React.FC<SVGProps<SVGSVGElement>>
      category: categoryId,
      variants: comp.variants.map(v => ({
        id: v.id,
        name: v.name,
        previewImage: v.previewImage,
        defaultProps: v.defaultProps
          ? (v.defaultProps as unknown as Record<string, unknown>)
          : {}
      }))
    };

    categoriesMap[categoryId].components.push(sidebarComp);
  });

  return Object.values(categoriesMap);
}


const initialState: SidebarState = {
  categories: mapRegistryToSidebar(),
  isOpen: true
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isOpen = !state.isOpen;
    },
    addCategory(state, action: PayloadAction<SidebarCategory>) {
      state.categories.push(action.payload);
    },
    addComponentToCategory(
      state,
      action: PayloadAction<{ categoryId: string; component: SidebarComponent }>
    ) {
      const category = state.categories.find(c => c.id === action.payload.categoryId);
      if (category) category.components.push(action.payload.component);
    }
  }
});

export const { toggleSidebar, addCategory, addComponentToCategory } = sidebarSlice.actions;
export default sidebarSlice.reducer;

