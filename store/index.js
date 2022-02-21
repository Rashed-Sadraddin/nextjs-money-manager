import { configureStore } from "@reduxjs/toolkit";
import costsSlice from "./costs-slice";
import formModalSlice from "./form-modal-slice";

const store = configureStore({
  reducer: { costs: costsSlice, showForm: formModalSlice },
});

export default store;
