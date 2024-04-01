import {ContainerDescription} from "../../../components/ContainerDescription";
import {Icon} from '../../../components/icons/Icon';
import {
    BackSide,
    CardButton,
    CardInner,
    FrontSide,
    ServiceCardStyled,
    ServicesContainer
} from "../../../components/StylesForComponents/ServicesStyles.ts";

const serviceCardData = [{

    id: "Services_card1",
    iconId: "Advertising",
    title: "advertising",
    description: "dolor sit amet",
    backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
},
    {
        id: "Services_card2",
        iconId: "Microphone",
        title: "sound design",
        description: "Voice Over, Beat Making",
        backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
    },
    {
        id: "Services_card3",
        iconId: "Photographer",
        title: "photography",
        description: "portrait, product photography",
        backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
    },
    {
        id: "Services_card4",
        iconId: "coding",
        title: "web development",
        description: "blog, e-commerce",
        backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
    },
    {
        id: "Services_card5",
        iconId: "game-development",
        title: "game design",
        description: "Character Design, Props & Objects",
        backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
    },
    {
        id: "Services_card6",
        iconId: "illustration",
        title: "uI/uX design",
        description: "Mobile app, website design",
        backDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
    },

];

export const Services = () => {
    return (
        <>
            <ContainerDescription>
                <h2>my services</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <ServicesContainer>
                {serviceCardData.map((cardData) => (
                    <ServiceCardStyled key={cardData.id}>
                        <CardInner>
                            <FrontSide>
                                <Icon iconId={cardData.iconId} width="74px" height="74px"/>
                                <h3>{cardData.title}</h3>
                                <p>{cardData.description}</p>
                            </FrontSide>
                            <BackSide>
                                <h3>{cardData.title}</h3>
                                <p>{cardData.backDescription}</p>
                                <CardButton>ORDER NOW →</CardButton>
                            </BackSide>
                        </CardInner>
                    </ServiceCardStyled>
                ))}
            </ServicesContainer>


            {/*Это старый и ёмкий вариант, который мне удалось сократить с помощью .map*/}

            {/*<ServicesContainer>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="Advertising" width="74px" height="74px"/>
                            <h3>advertising</h3>
                            <p>dolor sit amet</p></FrontSide>
                        <BackSide>
                            <h3>advertising</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="Microphone" width="74px" height="74px"/>
                            <h3>sound design</h3>
                            <p>Voice Over, Beat Making</p></FrontSide>
                        <BackSide>
                            <h3>sound design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="Photographer" width="74px" height="74px"/>
                            <h3>photography</h3>
                            <p>portrait, product photography</p></FrontSide>
                        <BackSide>
                            <h3>photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="coding" width="74px" height="74px"/>
                            <h3>web development</h3>
                            <p>blog, e-commerce</p></FrontSide>
                        <BackSide>
                            <h3>web development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="game-development" width="74px" height="74px"/>
                            <h3>game design</h3>
                            <p>Character Design, Props & Objects</p></FrontSide>
                        <BackSide>
                            <h3>game design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
                <ServiceCardStyled>
                    <CardInner>
                        <FrontSide><Icon iconId="illustration" width="74px" height="74px"/>
                            <h3>uI/uX design</h3>
                            <p>Mobile app, website design</p></FrontSide>
                        <BackSide>
                            <h3>uI/uX design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a
                                urna viverra morbi. </p>
                            <CardButton>ORDER NOW →</CardButton>
                        </BackSide>
                    </CardInner>
                </ServiceCardStyled>
            </ServicesContainer>*/}
        </>
    )
};

