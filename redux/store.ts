import {configureStore} from "@reduxjs/toolkit";
// import { counter } from "./features/reloadToggle";
import toggleReducer from "./features/reloadToggle"
import toggleReducer2 from "./features/reload2Toggle"
export const store=configureStore({
    reducer:{
        toggle:toggleReducer ,
        toggle2:toggleReducer2
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

