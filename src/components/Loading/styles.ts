import styled from 'styled-components';

export const StyledCircleMainBlock = styled.div`
  position: relative;
  height: 60vh;
`;

export const StyledCircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 3.75rem;
  height: 3.75rem;
  border: solid 0.125rem #ffcc00;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;

  animation: rotate 1s linear infinite;

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to { 
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;