import styled from 'styled-components';

export const StyledNothingFoundContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledNothingFoundContainerText = styled.p`
    font-size: 2.5rem;
    color: #000000;

    @media(max-width: 560px){
        font-size: 1.5rem;
    }
`;
