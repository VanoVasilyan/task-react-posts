import styled from 'styled-components';

export const StyledSinglePostContainer = styled.div`
    cursor: pointer;
    max-width: 22.5rem;
`;

export const StyledSinglePostImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`;

export const StyledSinglePostInfoBlock = styled.div`
    margin-top: 1rem;
`;

export const StyledSinglePostLifeStyle = styled.span`
    font-size: 0.8125rem;
    color: #EB0028;
    font-weight: 700;
`;

export const StyledSinglePostTitle = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
`;

export const StyledInfoInRow = styled.div`
    margin-top: 1rem;
    display: flex;
`;

export const StyledSinglePostAuthor = styled.span`
    font-size: 0.75rem;
    font-weight: 500;
`;

export const StyledSinglePostDate = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #9B9B9B;

    &::before,
    &::after {
        content: '';
        display: inline-block;
        width: 0.1875rem;
        height: 0.1875rem;
        background-color: #D7D7D7;
        border-radius: 50%;
        margin: 0 0.3125rem; 
    }
`;

export const StyledSinglePostViews = styled.span`
    font-size: 0.75rem;
    color: #9B9B9B;
`;

export const StyledSinglePostText = styled.p`
    line-height: 1.25rem;
    font-size: 0.875rem;
    margin-top: 1rem;
    color: #929292;
`;