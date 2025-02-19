import React, { FC } from 'react';
import { usePostsSelector } from '../../store/slices/posts';
import SinglePost from '../SinglePost';
import * as SC from './styles';

const Posts: FC = () => {
    const { posts } = usePostsSelector();

    return (
        <SC.StyledPostsMainContainer>
            {posts.length && (posts.map((post) => <SinglePost key={post.title}  {...post} />))}
        </SC.StyledPostsMainContainer>
    )
};

export default Posts
