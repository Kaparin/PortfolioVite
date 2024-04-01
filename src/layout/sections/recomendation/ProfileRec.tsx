import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TitleH3} from "../../../components/Title.tsx";
import {DescriptionP} from "../../../components/Description.tsx";

type ProfileRecProps = {
    imgSrc: string;
    name: string;
    aboutMe: string;

}

export const ProfileRec: React.FC<ProfileRecProps> = ({ imgSrc, name, aboutMe }) => {
    return (
        <ProfileWrap justify={`center`} direction={`row`}>
            <ProfileImg src={imgSrc} />
            <ProfileName title={name} />
            <ProfileAbout description={aboutMe} />
        </ProfileWrap>
    );
};
export const ProfileWrap = styled(FlexWrapper)`
`
export const ProfileImg = styled.img`
`
export const ProfileName = styled(TitleH3)`
`
export const ProfileAbout = styled(DescriptionP)`
`