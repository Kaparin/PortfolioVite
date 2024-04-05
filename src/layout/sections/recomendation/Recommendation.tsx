import React from 'react';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/css';
import {ContainerDescription} from "../../../components/StyledContainerDescription.tsx";
import {CardRecContainer, ContainerRecommendation} from "../../../components/StylesForComponents/RecomendationStyles";
import {StarRating} from "../../../components/StarRating";

import {ProfileRec} from "./ProfileRec";
import styled from "styled-components";
import {StyledDescriptionP} from "../../../components/Description.tsx";
import {StyledTitleH3} from "../../../components/Title.tsx";

const carouselData = [{

    rating: 3,
    title: 'Great Quality!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: 'src/images/Profile.png',
    name: 'James Gouse',
    aboutMe: 'Graphic Designer',

}, {

    rating: 4,
    title: 'Outstanding Performance!',
    description: 'Lorem ipsum dolor sit ullamco est sit aliqua dolor do amet sint.',
    imgSrc: 'src/images/Profile1.png',
    name: 'Laura Thompson',
    aboutMe: 'Software Engineer',
}, {

    rating: 5,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}, {

    rating: 1,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}, {

    rating: 2,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}, {

    rating: 5,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}, {

    rating: 5,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}, {

    rating: 5,
    title: 'Amazing Price!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi donec.',
    imgSrc: 'src/images/Profile2.png',
    name: 'David Attwood',
    aboutMe: 'Data Scientist',
}
];

type CardProps = {
    rating: number,
    title: string,
    description: string,
    imgSrc: string,
    name: string,
    aboutMe: string,
};

const CardRecommendation: React.FC<CardProps> = ({rating, title, description, imgSrc, name, aboutMe}) => (
    <CardRecContainer>
        <StarRating rating={rating}/>
        <StyledTitleH3> {title} </StyledTitleH3>
        <StyledDescriptionP>{description}</StyledDescriptionP>
        <ProfileRec imgSrc={imgSrc} name={name} aboutMe={aboutMe}/>
    </CardRecContainer>
);

export const Recommendation: React.FC = () => (
    <ContainerRecommendation>
        <ContainerDescription
            title={`recommendations`}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. lorem ipsum`}>
                    </ContainerDescription>

        <StyledSplideContainer>
            <Splide options={{
                type: 'loop',
                perPage: `3`, width: '100%',
                arrows: false,
                gap: '1rem',
                autoplay: true,
                pagination: true,
                overflow: true,
                breakpoints: {
                    1000: {
                        perPage: '2'
                    },
                    700: {
                        perPage: `1`
                    },
                }
            }}>
                {carouselData.map((cardData, i) => (
                    <StyledSplideSlide key={i}>
                        <CardRecommendation {...cardData}/>
                    </StyledSplideSlide>
                ))}
            </Splide>
        </StyledSplideContainer>
    </ContainerRecommendation>
);
const StyledSplideSlide = styled(SplideSlide)`
    box-sizing: border-box; // Add box-sizing
`;
export const StyledSplideContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 960px) {
        max-width: 90%;
    }

`
//
//
// `;
/*
import React from 'react';
import {ContainerDescription} from "../../../components/ContainerDescription";
import {
    CardRecContainer,
    ContainerRecommendation
} from "../../../components/StylesForComponents/RecomendationStyles.ts";
import {StarRating} from "../../../components/StarRating.tsx";
import {TitleH3} from "../../../components/Title.tsx";
import {DescriptionP} from "../../../components/Description.tsx";
import {ProfileRec} from "./ProfileRec.tsx";
import {FlexWrappers} from "../../../components/FlexWrappers.tsx";


export const Recommendation: React.FC = () => {
    return (
        <ContainerRecommendation>
            <ContainerDescription>
                <h2>recommendations</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <FlexWrappers direction={"row"} gap={"1.5rem"} wrap={"wrap"}>
            <CardRecommendation rating={5}
                                title={`Great Quality!`}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....`}
                                imgSrc="src/images/Profile.png"
                                name="James Gouse"
                                aboutMe="Graphic Designer"/>
            <CardRecommendation rating={5}
                                title={`Great Quality!`}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....`}
                                imgSrc="src/images/Profile1.png"
                                name="Tiana Philips"
                                aboutMe="Photographer"/>
            <CardRecommendation rating={5}
                                title={`Great Quality!`}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....`}
                                imgSrc="src/images/Profile2.png"
                                name="Talan Westervelt"
                                aboutMe="Business man"/>
            </FlexWrappers>
        </ContainerRecommendation>
    );
};

type CardProps = {
    rating: number,
    title: string,
    description: string,
    imgSrc: string,
    name: string,
    aboutMe: string,
}

const CardRecommendation: React.FC<CardProps> = ({ rating, title, description, imgSrc, name, aboutMe }) => {
    return (


                <CardRecContainer>
                <StarRating rating={rating}/>
                <TitleH3 title={title}/>
                <DescriptionP description={description}/>
                <ProfileRec imgSrc={imgSrc} name={name} aboutMe={aboutMe}/>
            </CardRecContainer>


    );
};*/
