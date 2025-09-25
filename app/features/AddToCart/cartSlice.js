import { createSlice } from '@reduxjs/toolkit';

// ✅ Load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage', error);
    return [];
  }
};

// ✅ Save to localStorage
const saveCart = (items) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage', error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { drawName, price, mainNumbers, megaNumber } = action.payload;

      const existingDraw = state.items.find((d) => d.drawName === drawName);

      if (existingDraw) {
        existingDraw.tickets = existingDraw.tickets || [];
        existingDraw.tickets.push({
          id: Date.now(),
          mainNumbers,
          megaNumber,
          price,
        });
      } else {
        const newDrawId = Date.now();
        state.items.push({
          drawId: newDrawId,
          drawName,
          price,
          tickets: [
            {
              id: Date.now(),
              mainNumbers,
              megaNumber,
              price,
            },
          ],
        });
      }

      saveCart(state.items);
    },

    // ✅ Remove entire draw group
    removeFromCart: (state, action) => {
      const { drawId } = action.payload;
      state.items = state.items.filter((d) => d.drawId !== drawId);
      saveCart(state.items);
    },

    // ✅ Remove a single ticket
    removeTicket: (state, action) => {
      const { drawId, ticketId } = action.payload;
      const draw = state.items.find((d) => d.drawId === drawId);
      if (draw) {
        draw.tickets = draw.tickets.filter((t) => t.id !== ticketId);

        // remove draw completely if no tickets left
        if (draw.tickets.length === 0) {
          state.items = state.items.filter((d) => d.drawId !== drawId);
        }
      }
      saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
  },
});

export const { addToCart, removeFromCart, removeTicket, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
