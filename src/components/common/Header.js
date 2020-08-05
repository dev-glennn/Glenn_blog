import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <StyledHeader>
            <ProfileBox>
                <ProfileImage src="/common/profile.png"/>
                <ProfileTag>
                    Full-Stack Developer
                </ProfileTag>
            </ProfileBox>
            <ProfileName>
                Jo MinJu / Glenn
            </ProfileName>
        </StyledHeader>
    );
};

export default Header;

const ProfileName = styled.p`
    font-size: 1.14rem;
    font-style: italic;
    color: #434656;
    margin: 0;
`;

const ProfileTag = styled.div`
    background-color: #9EB4FD;
    color: #FFFFFF;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-1deg);
    font-size: 1.3rem;
    font-style: italic;
    padding: 0.2rem 0.8rem;
    white-space: nowrap;
`;

const ProfileImage = styled.img`
    width: 10.7rem;
    height: 10.7rem;
    border-radius: 5.3rem;
    vertical-align: top;
`;

const ProfileBox = styled.div`
    position: relative;
    display: inline-block;
    width: 10rem;
    height: 10rem;
    margin-bottom: 2.5rem;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.4rem;
    padding: 3.5rem 3.5rem 0;
`;