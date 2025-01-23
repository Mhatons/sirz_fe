import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IReduxState {
    toggleState: boolean;
    toggleShow: boolean;
    isDarkMode: boolean;
}

const initialState: IReduxState = {
    toggleState: false,
    toggleShow: false,
    isDarkMode: false,
}

const slice = createSlice({
    name: "sliceInfo",
    initialState,
    reducers: {
        setToggleState(state, action: PayloadAction<boolean>) {
            state.toggleState = action.payload
        },
        setToggleShow(state, action: PayloadAction<boolean>) {
            state.toggleShow = action.payload
        },
        setIsDarkMode(state, action: PayloadAction<boolean>) {
            state.isDarkMode = action.payload
        },
    }
})

export const allReduxSliceInfo = (state: RootState) => state.sliceInfo

export const {
    setToggleState,
    setToggleShow,
    setIsDarkMode,
} = slice.actions;
export default slice.reducer