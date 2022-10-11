//React

//redux
import { createStore, combineReducers } from "redux";

//Reducers
import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
  products: ProductsReducer,
  category: CategoryReducer,
});

export default createStore(RootReducer);
