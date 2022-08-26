import { useDispatch, useSelector } from "react-redux";
import Canvas from "./Canvas";
import { updateUrl } from "./imageToCharRedux/slicer";
export default () => {
  const state = useSelector((state) => state.url);
  const dispatch = useDispatch();
  const onChange = (event) => {
    const inputFile = event.target;
    const file = inputFile.files[0];
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      dispatch(updateUrl(reader.result));
    });
    reader.readAsDataURL(file);
    inputFile.value = "";
  };
  return (
    <>
      <h1>Select image</h1>
      <div>
        <input type="file" onChange={(event) => onChange(event)} />
      </div>
      <Canvas imageUrl={state.url} />
    </>
  );
};
