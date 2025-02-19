import styled from 'styled-components';

export const StyledMainHeader = styled.header`
    margin: 0 1.25rem;

    @media screen and (max-width: 425px){
        margin-top: 2rem;
        margin-bottom: 2.375rem;
    }
`;

export const StyledHeaderInnerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 72.5rem;
    margin: 1.813rem auto 1.619rem;

    @media screen and (max-width: 425px){
        margin: 0;
    }
`;

export const StyledHamburgerButon = styled.button`
    display: none;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;

    @media screen and (max-width: 425px){
        display: block;
    }
`;

export const StyledIcon = styled.img``;

export const StyledLogo = styled.img``;

export const StyledPicture = styled.picture`
    cursor: pointer;

    @media screen and (min-width: 425px){
        margin-left: 29.4rem;
    }
}
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
