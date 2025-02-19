import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, TPopupState } from '../../types/global';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../types/store.main';

const initialState: TPopupState = {
    isPopupOpen: false,
    selectedPost: null,
};

const popupSlice = createSlice({
    name: 'popupSlice',
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<IPost>) => {
            state.isPopupOpen = true;
            state.selectedPost = action.payload;
        },
        closePopup: (state) => {
            state.isPopupOpen = false;
            state.selectedPost = null;
        },
    },
});

export default popupSlice.reducer;
export const usePopupAction = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ ...popupSlice.actions }, dispatch);
};

export const usePopupSelector = () => {
    return useSelector((state: TStore) => state.popup);
};
