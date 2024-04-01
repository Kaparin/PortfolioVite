/*
type DescriptionProps = {
    description: string
}*/

import styled from "styled-components";

export const StyledTitleH3 = styled.h3 `

    font-family: Inter,serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    `
type TitlePropsType = {
    title?: string
}

export const TitleH3 = ({ title }: TitlePropsType) => {
    return (
        <StyledTitleH3>{title}</StyledTitleH3>
    )

}
