import { createSlice } from '@reduxjs/toolkit';
import { GLOBAL } from '../constants';
import { globalState } from '../initialStates';

const slice = createSlice({
  name: GLOBAL,
  initialState: globalState,
  reducers: {
    setData(state = globalState, action) {
      const { page, data } = action.payload;
      state[page] = {
        ...state[page],
        ...data
      };
    }
  },
});

const globalReducer = {
  [GLOBAL]: slice.reducer,
};

export const {
  setData,
} = slice.actions;
export default globalReducer;
