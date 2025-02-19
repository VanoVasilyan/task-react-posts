import React, { FC } from 'react';
import { usePopupAction, usePopupSelector } from '../../store/slices/popup';
import CloseIcon from './../../assets/icons/CloseIcon.svg';
import { IPost } from '../../types/global';
import * as SC from './styles';

const PostPopup: FC = () => {
    const { closePopup } = usePopupAction();
    const { selectedPost } = usePopupSelector();
    const { img, img_2x, title, text, tags, autor, date, views } = selectedPost as IPost;

    return (
        <SC.StyledPopupOverlay onClick={() => closePopup()}>
            <SC.StyledPopupContent onClick={(e) => e.stopPropagation()}>
                <SC.StyledPopupClose onClick={() => closePopup()}>
                    <SC.StyledIcon src={CloseIcon} alt='CloseIcon' />
                </SC.StyledPopupClose>
                <SC.StyledPopupImage src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={title} />
                <SC.StyledPopupTitle>{title}</SC.StyledPopupTitle>
                <SC.StyledPopupText>{text}</SC.StyledPopupText>
                <SC.StyledPopupInfoBlock>
                    <SC.StyledPopupLifeStyle>{tags}</SC.StyledPopupLifeStyle>
                    <SC.StyledPopupInfoBlockItem>
                        <SC.StyledPopupInfoBlockItemTitle>Autor: </SC.StyledPopupInfoBlockItemTitle>
                        {autor}
                    </SC.StyledPopupInfoBlockItem>
                    <SC.StyledPopupInfoBlockItem>
                        <SC.StyledPopupInfoBlockItemTitle>Date: </SC.StyledPopupInfoBlockItemTitle>
                        {date}
                    </SC.StyledPopupInfoBlockItem>
                    <SC.StyledPopupInfoBlockItem>
                        <SC.StyledPopupInfoBlockItemTitle>Views: </SC.StyledPopupInfoBlockItemTitle>
                        {views}
                    </SC.StyledPopupInfoBlockItem>
                </SC.StyledPopupInfoBlock>
            </SC.StyledPopupContent>
        </SC.StyledPopupOverlay>
    );
};

export default PostPopup
