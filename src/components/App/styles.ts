import styled from 'styled-components';

export const StyledAppContainer = styled.div`
    height: 100vh;
`;

export const StyledBluredBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    -webkit-filter: blur(0.5);
    filter: blur(0.5);
    opacity: 0.5;
    background-color: #FFFFFF;
`;
