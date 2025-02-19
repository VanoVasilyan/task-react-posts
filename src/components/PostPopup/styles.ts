import styled from 'styled-components';

export const StyledPopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
`;

export const StyledPopupContent = styled.div`
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 0.625rem;
    width: 90%;
    max-width: 31.25rem;
    text-align: center;
    position: relative;
`;

export const StyledPopupClose = styled.button`
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const StyledIcon = styled.img``;

export const StyledPopupImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`;

export const StyledPopupTitle = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
`;

export const StyledPopupText = styled.p`
    line-height: 1.25rem;
    font-size: 0.875rem;
    margin-top: 1rem;
    color: #929292;
`;

export const StyledPopupLifeStyle = styled.span`
    font-size: 0.8125rem;
    color: #EB0028;
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

export const StyledPopupInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.1rem;
    margin-top: 1rem;
`;

export const StyledPopupInfoBlockItem = styled.div`
    color: #9B9B9B;
`;

export const StyledPopupInfoBlockItemTitle = styled.span`
    font-weight: bold;
    color: #000000;
`;