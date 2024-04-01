import styled from "styled-components";
import React from "react";

export const PlanSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
`
export const PlanContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;


`

type PlanCardProps = {
    highlighted?: boolean;
    children?: React.ReactNode;
    shadow?: string;
};
export const PlanCard = styled.div<PlanCardProps>`
    flex: 0 1 30%;
    position: relative;
    max-width: 310px;
    padding: 3rem 1.9rem 1.5rem;
    margin: 2rem auto 0;
    text-align: center;
    background-color: #fff;
    box-shadow: ${props => props.shadow};

    span {
        font-size: 2rem;
        font-weight: 700;
        color: #2B2B2B;
    }

    h4 {
        margin-bottom: 1rem;
    }

    ul {
        padding: 0;

    }

    li {
        display: flex;
        align-items: center;
        text-align: left;
        @media (max-width: 989px) {
            
            font-size: 0.7rem;
            
        }

        & > svg {
            margin-right: 1rem;
        }
    }

    ${({highlighted}) =>
    highlighted && `
             &::before {
                  content: 'most popular';
                  position: absolute;
                  top: 0; 
                  left: 0;
                  right: 0;
                  height: 2rem; 
                  background-color: #FFB400;
                  z-index: 2; 
                  display: flex;
                  justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    font-weight: 400;
                    text-transform: capitalize;
                    
                }
              `}
`;
type ButtonPlanProps = {
    background?: string;
    children?: React.ReactNode;
    color?: string
    hoverColor?: string

}
export const ButtonPlan = styled.button <ButtonPlanProps>`
    border-radius: 30px;
    width: 10rem;
    height: 2rem;
    background: ${props => props.background || "white"};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    color: #2B2B2B;
    border: none;
    margin-top: 1rem;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    transition: transform 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${props => props.color};
        background-color: ${props => props.hoverColor || "#E4E6EB"};
    }
`
