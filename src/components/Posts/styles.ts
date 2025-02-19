import styled from 'styled-components';

export const StyledPostsMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem auto 0;
    max-width: 72.5rem;
    gap: 40px;

    @media(max-width: 800px){
        margin: 3rem 1.25rem 0;
    }
`;