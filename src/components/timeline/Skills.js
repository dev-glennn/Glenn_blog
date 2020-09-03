import React from "react";
import styled, {css} from "styled-components";

const skillsData = [
    {'Javascript': 90},
    {'HTML, CSS': 90},
    {'php': 80},
    {'ReactJS': 75},
    {'JAVA': 70},
    {'AWS': 70},
    {'nodeJS': 60},
];

const SkillItem = ({lang, percent}) => {
    return (
        <StyledSkillItem percent={percent}>
            <span className="language">{lang}</span>
            <span className="percent">{percent + '%'}</span>
        </StyledSkillItem>
    );
};

const StyledSkillItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .3rem;
    padding: .3rem .5rem;
    ${({percent})=>{
    return css`width: ${percent}%;`;
}}    
    position: relative;
    z-index: 1;
    
    >span {
        color: #FFF;
        font-size: .9rem;
        font-weight: 400;
    }
    
    .percent {
        font-weight: 600;
        display: inline-block;
        color: #FFF;
    }
    
    .percent:before{
        z-index: -1;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        content: '';
        height: 100%;
        background-color: rgba(33, 111, 219, .8);
        border-radius: .25rem;
        width: 100%;
        transition: 300ms all;
    }
    
    &:hover .percent:before{
        background-color: rgba(33, 111, 219, 1);
    }
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const Skills = () => {
    return (
        <StyledSkills>
            {skillsData.map((item, index) => {
                return <SkillItem key={index} lang={Object.keys(item)[0]} percent={Object.values(item)[0]}/>
            })}
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;