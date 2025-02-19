import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { postsApi } from './../services/posts';
import { TStore } from '../../types/store.main';
import { TPostsdata } from '../../types/posts';

const initialState: TPostsdata = {
    posts: []
};

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            return {
                ...state,
                posts: payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            postsApi.endpoints.getAllPosts.matchFulfilled,
            (state, { payload }) => {
                state.posts = payload
            }
        )
    }
});

export default postsSlice.reducer;
export const usePostsAction = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ ...postsSlice.actions }, dispatch);
};

export const usePostsSelector = () => {
    return useSelector((state: TStore) => state.posts);
};
