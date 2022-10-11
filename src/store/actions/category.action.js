import { categoryTypes } from "../types"

const { SELECTED_CATEGORY } =  categoryTypes;

export const selectCategory = (id) => ({
    type: SELECTED_CATEGORY,
    categoryId: id,
})