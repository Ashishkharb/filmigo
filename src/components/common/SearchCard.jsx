import styled from 'styled-components';

export const SearchImgWrapper = styled.div`
    width: 100%;
    height: 320px;
    border-radius: 40px;
    overflow: hidden;
    border: 1px solid #ddd;
    img {
        object-fit: cover contain;
        height: 100%;
        width: 100%;
    }
`;

export const SearchCard = styled.div`
    width: 220px;
    height: 100%;
    margin: 0 15px 40px;
    h1 {
        margin: 10px 0;
        font-size: 18px;
    }
    p {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 15px;
    }
`;