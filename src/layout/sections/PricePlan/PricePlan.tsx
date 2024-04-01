import {ContainerDescription} from "../../../components/ContainerDescription";
import {
    ButtonPlan,
    PlanCard,
    PlanContainer,
    PlanSection
} from "../../../components/StylesForComponents/PricePlanStyles.ts";
import {Icon} from "../../../components/icons/Icon";

const planCardData = [
    {
        id: 'SilverPlan',
        title: "silver",
        price: "$0.00",
        description: `For most businesses that want to
        optimize web queries`,
        included: ["UI Design", "web development"],
        notIncluded: ["logo design", "seo optimization", "wordPress integration","5 Websites","unlimited user","20 gB bandwith"],
        highlighted: false
    },
    {
        id: 'GoldPlan',
        title: "gold",
        price: "$50.00",
        description: `For most businesses that want to
        optimize web queries`,
        included: ["UI Design", "web development", "logo design", "seo optimization"],
        notIncluded: ["wordPress integration","5 Websites","unlimited user","20 gB bandwith"],
        highlighted: true
    },
    {
        id: 'DiamondPlan',
        title: "diamond",
        price: "$80.00",
        description: `For most businesses that want to
        optimize web queries`,
        included: ["UI Design", "web development", "logo design", "seo optimization", "wordPress integration","5 Websites","unlimited user","20 gB bandwith"],
        notIncluded: [],
        highlighted: false
    },
]
export const PricePlan = () => {
    return (
        <PlanSection>
            <ContainerDescription>
                <h2>Price plans</h2>
                <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </ContainerDescription>
            <PlanContainer>
                {planCardData.map((planData) => (
                    <PlanCard key={planData.id} highlighted={planData.highlighted} shadow={planData.highlighted ? "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" : undefined}>
                        <h4>{planData.title}</h4>
                        <p><span>{planData.price}</span>/Hour</p>
                        <p>{planData.description}</p>
                        <ul>
                            {planData.included.map((include) => (
                                <li key={include}><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>{include}</li>
                            ))}
                            {planData.notIncluded.map((notInclude)=> (
                                <li key={notInclude}><Icon iconId="Close" width="24" height="24"/>{notInclude}</li>
                            ))}
                        </ul>
                        <ButtonPlan background="#FFB400">ORDER NOW</ButtonPlan>
                    </PlanCard>
                ))}
            </PlanContainer>

        </PlanSection>
    );
};

                {/*Это старый и ёмкий вариант, который мне удалось сократить с помощью .map*/}
                {/*<PlanCard>
                    <h4>silver</h4>
                    <p><span> $0.00 </span>/Hour</p>
                    <p> For most businesses that want to
                        optimize web queries</p>
                    <ul>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>UI Design</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>web development</li>
                        <li><Icon iconId="Close" width="24" height="24"/>logo design</li>
                        <li><Icon iconId="Close" width="24" height="24"/>seo optimization</li>
                        <li><Icon iconId="Close" width="24" height="24"/>wordPress integration</li>
                        <li><Icon iconId="Close" width="24" height="24"/>5 Websites</li>
                        <li><Icon iconId="Close" width="24" height="24"/>unlimited user</li>
                        <li><Icon iconId="Close" width="24" height="24"/>20 gB bandwith</li>
                    </ul>
                    <ButtonPlan color="#FFB400">ORDER NOW</ButtonPlan>
                </PlanCard>
                <PlanCard highlighted shadow="0px 0px 10px 0px rgba(0, 0, 0, 0.15)">
                    <h4>gold</h4>
                    <p><span>$50.00</span>/Hour</p>
                    <p>For most businesses that want to
                        optimize web queries</p>
                    <ul>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>UI Design</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>web development</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>logo design</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>seo optimization</li>
                        <li><Icon iconId="Close" width="24" height="24"/>wordPress integration</li>
                        <li><Icon iconId="Close" width="24" height="24"/>5 Websites</li>
                        <li><Icon iconId="Close" width="24" height="24"/>unlimited user</li>
                        <li><Icon iconId="Close" width="24" height="24"/>20 gB bandwith</li>
                    </ul>
                    <ButtonPlan background="#FFB400">ORDER NOW</ButtonPlan>
                </PlanCard>
                <PlanCard>
                    <h4>diamond</h4>
                    <p><span>$80.00</span>/Hour</p>
                    <p>For most businesses that want to
                        optimize web queries</p>
                    <ul>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>UI Design</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>web development</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>logo design</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>seo optimization</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>wordPress integration</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>5 Websites</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>unlimited user</li>
                        <li><Icon iconId="Check" width="24" height="24" fill="#FFB400"/>20 gB bandwidth</li>
                    </ul>
                    <ButtonPlan color="#FFB400"> ORDER NOW</ButtonPlan>
                </PlanCard>*/}

