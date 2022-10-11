//redux
import { productsTypes } from "../types";

const { SELECTED_PRODUCTS, FILTERED_PRODUCTS } = productsTypes;

export const selectedProducts = (id) => ({
  type: SELECTED_PRODUCTS,
  productId: id,
});

export const filteredProducts = (id) => ({
  type: FILTERED_PRODUCTS,
  categoryId: id,
});
