//Constants
import { categories } from "../../constants/data";

//redux
import { categoryTypes } from "../types";

const { SELECTED_CATEGORY } = categoryTypes;

const initialState = {
  categories: categories,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default CategoryReducer;
