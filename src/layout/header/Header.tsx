import React from 'react';
import styled from "styled-components";


export const Header: React.FC = () => {
    return (
        <HeaderBackground>
        <HeaderWrapper>
            <HeaderContent>
                <HeaderTitle>I’m Rayan Adlrdard<br/>
                    <span>Front-end</span> Developer </HeaderTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                <HireButton>HIRE ME<span className="icon-Hire-Me"></span></HireButton>
            </HeaderContent>
            <HeroImage src="/images/HeroImage.svg" alt="Rayan Adlardard" />
            {/* SVG и векторные элементы здесь */}
        </HeaderWrapper>
        </HeaderBackground>
    );
};


export const HeaderBackground = styled.div`
    background-color: #ffffff;
    width: 100%;
`
export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1020px;
    margin: 0 auto;
    // Максимальная ширина контейнера, как в вашем дизайне
    height: 467px;
        span {
            color: #FFB400;
        }
    @media (max-width: 768px) {
        flex-direction: column-reverse !important;
        height: auto;
    }
`;

export const HeaderContent = styled.div`
    p {
        margin-top: 1rem;
    }
    margin: 6rem 2rem 3.5rem 3.7rem;
  // Если нужно оставить текст слева и изображение справа на мобильных
  @media (max-width: 768px) {
    text-align: center;
      margin: 0 2rem 2rem 2.5rem;

  }
`;

export const HeaderTitle = styled.h1`
    color: #2B2B2B;
    font-family: Inter, serif;
    font-style: normal;
    font-weight: 700;
    line-height: 3.7rem;
    font-size: 3rem;
    @media (max-width: 431px) {
        font-size: 2rem;
        line-height: 2.2rem;
    }
    @media (max-width: 889px) {
        line-height: 2.7rem;
        font-size: 2.5rem;
    }
`;



export const HireButton = styled.button`
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    border-radius: 5px;
    background: #FFB400;
    margin-top: 2rem;

    span.icon-Hire-Me {
        content: "\\e900";
        color: #080808;
        margin-left: 0.5rem;;
    }

    &:hover {
        background-color: #e69500;
    }

    &:active {
        background-color: #cc8400;
    }
`;

interface HeroImageProps {
    src: string;
    alt: string;
}
export const HeroImage = styled.img<HeroImageProps> `
    width: 50%;
    max-width: 325px;
    max-height: 459px;
    height: auto;
    margin-right: 3rem;
    margin-bottom: -0.7rem;

    @media (max-width: 768px) {
        width: 30%;
        margin: 0 auto;

    }
`;