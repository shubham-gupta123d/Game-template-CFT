import { ADD_TO_CART, REMOVE_FROM_CART } from '@/redux/actions/actionConstants';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
}
