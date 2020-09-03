import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {ColorExtractor} from 'react-color-extractor';

const profile = {
    'nameKr': '조민주',
    'nameEn': 'Jo MinJu',
    'desc': 'Front & Back Developer',
    'img': '/common/profile.png',
    'bgImg': '/common/profile-bg.png'
};

const Header = () => {

    const [bgGradient, setBgGradient] = useState(null);

    return (
        <StyledHeader>
            <ProfileBg gradient={bgGradient}>
                <ProfileBgImage src={profile.bgImg}/>
                <ProfileImage src={profile.img}/>
                <div className="profile-bg"/>
            </ProfileBg>
            <ProfileBox>
                <ProfileName>
                    {profile.nameKr}
                    <span className="english-name">({profile.nameEn})</span>
                </ProfileName>
                <ProfileDesc>
                    {profile.desc}
                </ProfileDesc>
            </ProfileBox>
            <ColorExtractor getColors={colors => setBgGradient(colors.filter((item, i) => (i < 2)).join(','))}
                            src={profile.bgImg}/>
        </StyledHeader>
    );
};

export default Header;

const ProfileDesc = styled.p`
    font-size: 1.06rem;
    color: #65676b;
    margin: 0;
`;

const ProfileName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.18;
    padding-bottom: .8rem;
    
    .english-name{
        font-size: 1.75rem;
        font-weight: 400;
        margin-left: .8rem;
    }
`;

const ProfileBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 908px;
    padding: 0 1rem 1rem;
    text-align: center;
    border-bottom: 1px solid #ced0d4;
`;

const ProfileImage = styled.img`
    z-index: 2;
    position: absolute;
    left: 50%;
    bottom: -6%;
    transform: translateX(-50%);
    width: 13rem;
    height: 13rem;
    border-radius: 7.5rem;
    border: .3rem solid #FFF;
`;

const ProfileBgImage = styled.img`
    object-fit: cover;
    z-index: 1;
    width: 100%;
    max-width: 940px;
    height: 100%;
    border-radius: 0px 0px max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 0px 0px 8px 8px;
`;

const ProfileBg = styled.div`
    position: relative;
    width: 100%;
    height: 348px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 2rem;
    
    .profile-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
    }
    
${({gradient}) => {
    if (gradient) {
        return css`
            .profile-bg{
                background: linear-gradient(to right, ${gradient});
            }
            
            .profile-bg:after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: inline-block;
                content: '';
                background: linear-gradient(to bottom, transparent, #FFF 50%);
            }
            `;
    }
}}
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
`;