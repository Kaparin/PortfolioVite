import {ContainerDescription} from "../../../components/ContainerDescription";
import {
    CardRecContainer,
    ContainerRecommendation
} from "../../../components/StylesForComponents/RecomendationStyles.ts";
import {StarRating} from "../../../components/StarRating.tsx";
import {TitleH3} from "../../../components/Title.tsx";
import {DescriptionP} from "../../../components/Description.tsx";
import {ProfileRec} from "./ProfileRec.tsx";


export const Recommendation = () => {
    return (
        <ContainerRecommendation>
            <ContainerDescription>
                <h2>recommendations</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <CardRecommendation rating={5}
                                title={`Great Quality!`}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....`}
                                imgSrc="path/to/image.jpg"
                                name="John Doe"
                                aboutMe="Some text about John Doe"/>
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
            <StarRating rating={rating}  />
            <TitleH3 title={title} />
            <DescriptionP description={description} />
            <ProfileRec imgSrc={imgSrc} name={name} aboutMe={aboutMe} />
        </CardRecContainer>
    );
};

