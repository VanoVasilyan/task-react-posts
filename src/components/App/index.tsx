import React, { FC, useEffect, useMemo } from 'react';
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

    const filteredPosts = useMemo(() => {
        if (!data) return [];
        if (!searchValue.trim()) return data;

        const lowerSearch = searchValue.toLowerCase().trim();
        return data.filter(item =>
            item.title.toLowerCase().includes(lowerSearch) ||
            item.text.toLowerCase().includes(lowerSearch)
        );
    }, [searchValue, data]);

    useEffect(() => {
        setPosts(filteredPosts);
    }, [filteredPosts, setPosts]);

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
