import styled, { css } from 'styled-components';

export const StyledNavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    border-top: 0.0625rem solid #E9E9E9;
    border-bottom: 0.0625rem solid #E9E9E9;
    background: #FFFFFF;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    z-index: 9;

    &.hidden {
        transform: translateY(-100%); 
        opacity: 0;
        pointer-events: none;
    }
`;

export const StyledNavbarMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 34.625rem;

    @media(max-width:425px){
        display: none;
    }
`;

export const StyledMenuItemChildrenList = styled.ul`
    display: none;
    position: absolute;
    top: 3.6rem;
    z-index: 10;
    width: 11rem;
    padding: 1.25rem;
    background: #FFFFFF;
    border: 0.0625rem solid #E9E9E9;
`;

export const StyledNavbarMenuChildrenListtItem = styled.li`
    display: flex;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
        border-bottom: 0.0625rem solid #E9E9E9;
    }
`

export const StyledMenuItemChildrenListLink = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
    font-size: 0.875rem;
    margin: 0.3rem 0;
    color: #000000;
    transition: 0.4s;
    text-decoration: none;

    &:hover {
      color: #969696;
      transform: translateX(0.313rem);
    }
`;

export const StyledNavbarMenuParentItem = styled.li<{ $needBorderBottom?: boolean }>`
    display: flex;
    position: relative;
    cursor: pointer;

    ${({ $needBorderBottom }) => $needBorderBottom && css`
      &:not(:last-child) {
        border-bottom: 0.0625rem solid #E9E9E9;
    }
    ` }

    &:hover > ${StyledMenuItemChildrenList}{
        display: block;
    }
`

export const StyledMenuItemLink = styled.a`
    display: flex;
    align-items: center;
    margin: 1.219rem 0;
    gap: 0.25rem;
    font-weight: 500;
    color: #000000;
    text-decoration: none;

    @media (max-width: 1024px){
        width: 7rem;
    }

    @media (max-width: 900px){
        width: 5rem;
    }

    @media (max-width:710px) 
        width: 4rem;
    }
}
`

export const StyledMenuItemTitle = styled.span``;

export const StyledMenuItemIcon = styled.img`
    cursor: pointer;
`;

export const StyledSideBar = styled.div`
    position: fixed;
    z-index: 1000;
    width: 80%;
    top: 0;
    height: 100%;
    left: -100%;
    transition: 0.5s;
    border: 0.0625rem solid #E9E9E9;
    background-color: #FFFFFF;

    &.show {
        left: 0;
    }

    &.hide{
        left: -100%;
    }
`;

export const StyledSidebarLogoPart = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #E9E9E9;
    align-items: center;
    padding: 2rem 1.25rem 1.593rem;
    margin: 0;
`;

export const StyledCloseButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
`;

export const StyledPicture = styled.picture``;

export const StyledPictureSource = styled.source``;

export const StyledIcon = styled.img``;

export const StyledLogo = styled.img``;

export const StyledSidebarList = styled.ul`
    flex-direction: column;
    padding: 0 1.25rem;
`;