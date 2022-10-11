//Constants
import { products } from "../../constants/data";

//Action / Types
import { productsTypes } from "../types";

const { SELECTED_PRODUCTS, FILTERED_PRODUCTS } = productsTypes;

const initialState = {
  products: products,
  filteredProducts: [],
  selected: null,
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCTS:
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        ),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
