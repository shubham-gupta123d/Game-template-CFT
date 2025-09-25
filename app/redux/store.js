import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/AddToCart/cartSlice';
import bannerReducer from '@/features/AddToCart/bannerSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    banner: bannerReducer,
  },
});
