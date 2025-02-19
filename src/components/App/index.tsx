import React, { FC, useEffect } from 'react';
import { useGetAllPostsQuery } from '../../store/services/posts';
import { usePostsAction } from '../../store/slices/posts';
import { useGlobalContext } from '../../context/context';
import { usePopupSelector } from '../../store/slices/popup';
import Header from '../Header';
import Navbar from '../Navbar';
import Loading from '../Loading';
import PostPopup from '../PostPopup';
import Posts from '../Posts';
import * as SC from './styles';

const App: FC = () => {
    const { data, isLoading } = useGetAllPostsQuery({});
    const { setPosts } = usePostsAction();
    const { isPopupOpen, selectedPost } = usePopupSelector();
    const { isShowSideBar, searchValue, showSideBar } = useGlobalContext();

    useEffect(() => {
        if (searchValue.trim()) {
            const lowerSearch = searchValue.toLowerCase().trim();
            const filteredPosts = data?.filter(item =>
                item.title.toLowerCase().includes(lowerSearch) ||
                item.text.toLowerCase().includes(lowerSearch)
            );
            setPosts(filteredPosts);
        } else {
            setPosts(data);
        }
    }, [searchValue, data]);

    return (
        <SC.StyledAppContainer>
            {isShowSideBar && <SC.StyledBluredBackground onClick={showSideBar} />}
            <Header />
            <Navbar />
            {isLoading && !data ? <Loading /> : <Posts />}
            {isPopupOpen && selectedPost && <PostPopup />}
        </SC.StyledAppContainer>
    )
};

export default App
