import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const PERSIST_KEY = 'lotto_cart_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    if (!raw) return undefined;
    return { cart: JSON.parse(raw) };
  } catch (e) {
    return undefined;
  }
}

function saveState(state) {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(state.cart));
  } catch (e) {
    // ignore
  }
}

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
