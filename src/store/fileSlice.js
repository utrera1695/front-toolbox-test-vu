import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
	name: "file",
	initialState: {
		files: [],
		counter: 0,
	},
	reducers: {
		setFiles: (state, action) => {
			state.files = action.payload;
		},
	},
});

export const { setFiles } = fileSlice.actions;
export default fileSlice.reducer;
