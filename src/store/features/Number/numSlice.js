import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 1
}

const numSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        addNum: (state, action) => {
            state.num = Number(state.num) + Number(action.payload);
        },
        multiplyNum: (state, action) => {
            state.num = state.num * action.payload;
        },
        divideNum: (state, action) => {
            state.num = action.payload / state.num;
        },
        subtractNum: (state, action) => {
            state.num = action.payload - state.num;
        }
    }
})


export const { addNum, multiplyNum, divideNum, subtractNum } = numSlice.actions;
// export default numSlice.reducer;
export const numReducer = numSlice.reducer;