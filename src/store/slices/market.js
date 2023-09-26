import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  info: {
    data: null,
  },
};

const marketSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateMarketInfo(
      state,
      {
        payload: {
          data: null,
        },
      }
    ) {
      state.info = { 
        data,
      };
    },
  },
});

export const { updateMarketInfo } = marketSlice.actions;

export default marketSlice.reducer;
