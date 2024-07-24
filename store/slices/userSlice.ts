import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { IUserState } from "@store/types/userData";

const initialState: IUserState= {
name:'',
isWelcome:false,
setState:0,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setRouteState: (state, action) => {
            state.isWelcome = action.payload;
        },
        incrementProgress: (state, action) => {
            state.setState += action.payload;
          },
          resetProgress: () => initialState,
    },
});
export const {
setName,
setRouteState,
incrementProgress,
resetProgress,
}= userSlice.actions;
export const selectUserState =(state:RootState) => state.user;
export default userSlice.reducer;