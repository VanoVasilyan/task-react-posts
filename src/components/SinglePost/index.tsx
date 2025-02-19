import React, { FC } from 'react';
import { usePopupAction } from '../../store/slices/popup';
import { IPost } from '../../types/global';
import * as SC from './styles';

const SinglePost: FC<IPost> = (post) => {
    const { title, text, tags, autor, img, img_2x, date, views } = post;
    const { openPopup } = usePopupAction();

    return (
        <SC.StyledSinglePostContainer onClick={() => openPopup(post)}>
            <SC.StyledSinglePostImage src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={title} />
            <SC.StyledSinglePostInfoBlock>
                <SC.StyledSinglePostLifeStyle>{tags}</SC.StyledSinglePostLifeStyle>
                <SC.StyledSinglePostTitle>{title}</SC.StyledSinglePostTitle>
                <SC.StyledInfoInRow>
                    <SC.StyledSinglePostAuthor>{autor}</SC.StyledSinglePostAuthor>
                    <SC.StyledSinglePostDate>{date}</SC.StyledSinglePostDate>
                    <SC.StyledSinglePostViews>{views} Views</SC.StyledSinglePostViews>
                </SC.StyledInfoInRow>
                <SC.StyledSinglePostText>{text}</SC.StyledSinglePostText>
            </SC.StyledSinglePostInfoBlock>
        </SC.StyledSinglePostContainer>
    )
};

export default SinglePost
