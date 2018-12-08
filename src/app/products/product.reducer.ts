import { ProductActionTypes, ProductAction } from './product.actions';

export const initialState = {
  products: []
};

export function productReducer (
  state = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ProductActionTypes.LoadProducts:
      return {
        ...state
      };
    case ProductActionTypes.LoadedProducts:

      return {
        ...state,
        products: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

