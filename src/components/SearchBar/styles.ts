import styled from 'styled-components';

export const StyledSearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #FFFFFF;
    padding: 0.313rem 0.625rem;
    border: 0.063rem solid grey;
    border-radius: 0.938rem;
`;

export const StyledSearchBarInput = styled.input<{ $show: boolean }>`
    width: ${({ $show }) => ($show ? '9.375rem' : '0rem')};
    opacity: ${({ $show }) => ($show ? '1' : '0')};
    border: none;
    outline: none;
    background-color: #FFFFFF;
    transition: width 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

export const StyledIcon = styled.img`
    cursor: pointer;
    padding-right: 0.1rem;
`;