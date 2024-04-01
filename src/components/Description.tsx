import styled from "styled-components";
import React from "react";


export const StyledDescriptionP = styled.p `
    font-family: Inter,serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3rem; /* 160% */
  
`
type DescriptionProps = {
    description: string
}

export const DescriptionP: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <StyledDescriptionP>{description}</StyledDescriptionP>
    )

}
