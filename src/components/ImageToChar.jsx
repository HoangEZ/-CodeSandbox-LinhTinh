import { Provider } from "react-redux";
import ImageToCharInner from "./ImageToCharInner";
import store from "./imageToCharRedux/store";

export default () => (
  <Provider store={store}>
    <ImageToCharInner />
  </Provider>
);
