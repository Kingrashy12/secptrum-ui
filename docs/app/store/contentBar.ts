"use-client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: ContentState = {
  contents: [],
};

const contentBar = createSlice({
  name: "content",
  initialState,
  reducers: {
    getPageContents: (state) => {
      const headingElements = Array.from(
        global?.document.querySelectorAll("h4")
      );
      const headings = headingElements.map((header) => ({
        id: header.id,
        text: header.textContent || "",
      }));
      state.contents = headings;
    },
  },
});

export default contentBar.reducer;

export const { getPageContents } = contentBar.actions;
