const { createSlice } = require("@reduxjs/toolkit");

const slicer = createSlice({
  name: "imageUrl",
  initialState: { url: "" },
  reducers: {
    updateUrl(state, action) {
      state.url = action.payload;
    }
  }
});

export const { updateUrl } = slicer.actions;
export default slicer.reducer;
