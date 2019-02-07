import { ProductsState } from '../modles/products.models';
import * as actions from '../actions/products.actions';

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  products: null,
  selectedProduct: null
};

export function reducer(state: ProductsState = initialState, action: actions.Actions): ProductsState {
  switch (action.type) {
    case actions.LOAD_PRODUCTS: {
      return { ...state, isLoading: true, error: null, products: null };
    }

    case actions.LOAD_PRODUCTS_COMPLETED_WITH_SUCCESS: {
      const products = action.payload;

      return { ...state, isLoading: false, products };
    }

    case actions.LOAD_PRODUCTS_COMPLETED_WITH_ERROR: {
      const error = action.payload;

      return { ...state, isLoading: false, error };
    }

    case actions.LOAD_PRODUCT: {
      return { ...state, isLoading: true, error: null, selectedProduct: null };
    }

    case actions.LOAD_PRODUCT_COMPLETED_WITH_SUCCESS: {
      const selectedProduct = action.payload;

      return { ...state, isLoading: false, selectedProduct };
    }

    case actions.LOAD_PRODUCT_COMPLETED_WITH_ERROR: {
      const error = action.payload;

      return { ...state, isLoading: false, error };
    }

    case actions.ADD_PRODUCT: {
      const product = action.payload;

      if (state.products) {
        return { ...state, products: [ ...state.products, product ] };
      }
      return { ...state, products: [ product ] };
    }

    default: {
      return state;
    }
  }
}
