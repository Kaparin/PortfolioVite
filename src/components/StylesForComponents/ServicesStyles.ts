import styled from "styled-components";

export const CardButton = styled.a`
    color: #FFB400;
    font-weight: 700;
    font-family: Roboto, serif;

    &:hover {
        cursor: pointer;
    }


`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

`;

export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    border-radius: 10px;
`;

export const FrontSide = styled(CardFace)`
    background-color: #fff;
`;

export const BackSide = styled(CardFace)`
    transform: rotateY(180deg);
    background-color: #fff;
`;


export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 970px;
    gap: 2rem;
    flex-wrap: wrap;

`;

export const ServiceCardStyled = styled.div`
    flex-basis: calc(33.3% - 2rem); /* Занимать ~1/3 ширины контейнера минус gap */
    min-width: 280px; /* Минимальная ширина */
    max-width: 310px; /* Максимальная ширина */
    height: 225px; /* Фиксированная высота */
    margin: 1rem 0; /* Отступы только сверху и снизу */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Распределение содержимого */
    align-items: center;
    background-color: #fff;
    padding: 1.8rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &:hover ${CardInner} {
        transform: rotateY(180deg);
    }
`;
