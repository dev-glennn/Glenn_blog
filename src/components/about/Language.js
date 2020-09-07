import React from "react";
import styled from "styled-components";

const languageArr = {
    'front': ['Javascript', 'ReactJS', 'HTML', 'CSS'],
    'back': ['PHP', 'NodeJS', 'Java', 'Express', 'mongoose'],
    'database': ['MySQL', 'Oracle', 'MongoDB', 'AWS', 'MariaDB']
};

const Language = ({type}) => {
    return (
        <StyledLanguage>
            {languageArr[type].map((item, index) => {
                return <div key={index} className="language">
                    <img src={"/about/lang-" + item.toLowerCase() + ".png"} alt={item}/>
                    <span>{item}</span>
                </div>
            })}
        </StyledLanguage>
    );
};

export default Language;

const StyledLanguage = styled.div`
    text-align: left;
    
    >.language {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 1.8rem;
        
        >img {
            width: 70px;
            height: 70px;
            object-fit: contain;
        }
        
        >span {
            color: #050505;
            font-size: .8rem;
            font-weight: 300;
            margin: .71rem 0;
        }
    }
    
    >.language:last-child{
        margin-right: 0;
    }
`;