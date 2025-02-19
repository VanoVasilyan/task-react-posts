import styled from 'styled-components';

export const StyledMainHeader = styled.header`
    margin: 0 1.25rem;
    position: relative;

    @media screen and (max-width: 425px){
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }
`;

export const StyledHeaderInnerBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 72.5rem;
    margin: 1.813rem auto 1.619rem;

    @media(max-width: 768px){
        justify-content: space-between;
    }
        
    @media(max-width: 630px){
        display: none;
    }
`;

export const StyledHamburgerButon = styled.button`
    display: none;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;

    @media screen and (max-width: 768px){
        display: block;
    }

    @media(max-width: 630px){
        margin-top: 0.2rem;
    }
`;

export const StyledIcon = styled.img``;

export const StyledLogo = styled.img``;

export const StyledPicture = styled.picture`
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const StyledPictureSource = styled.source``;

export const StyledSearchButton = styled.button`
    display: block;
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
`;

export const StyledSearchInput = styled.input``;

export const StyledMobileHeader = styled.div`
    width: 100%;
    display: flex;
`;

export const StyledHeaderInnerBlockMobile = styled.div`
    display: none;

    @media screen and (max-width: 630px){
        display: flex;
        margin: 1.813rem auto 1.619rem;
        flex-direction: column;
        gap: 1rem;
    }
`;