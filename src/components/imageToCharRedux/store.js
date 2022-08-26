import { configureStore } from "@reduxjs/toolkit";
import updateUrlReducer from "./slicer";

export default configureStore({
  reducer: {
    url: updateUrlReducer
  }
});
