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
    padding: .7rem 1.2rem;
    background-color: #434656;
    border-radius: .7rem;
    margin-bottom: .7rem;
    
    ${(props) => {
    return css`width: ${props.percent}%;`;
}}
    
    >span {
        color: #fff;
        font-size: 1rem;
        font-style: italic;
        font-weight: bold;
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
`;