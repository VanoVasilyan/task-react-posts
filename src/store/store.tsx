import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsApi } from './services/posts';
import postsReducer from './slices/posts';
import popupReducer from './slices/popup';

const combined = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
    popup: popupReducer,
});

const masterReducer = (state: ReturnType<typeof combined> | undefined, action: Parameters<typeof combined>[1]): ReturnType<typeof combined> => {
    return combined(state, action);
};

export const store = configureStore({
    reducer: masterReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(postsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
