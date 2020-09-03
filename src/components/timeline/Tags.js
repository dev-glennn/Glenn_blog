import React from "react";
import styled from "styled-components";

const tags = ['Javascript', 'php', 'ReactJS', 'nodeJS', 'Java', 'Oracle', 'AWS', 'MySQL', 'MariaDB', 'MongoDB'];

const Tags = () => {
    return (
        <StyledTags>
            {tags.map((tagItem, index) => {
                return <span key={index}>{'#' + tagItem}</span>
            })}
        </StyledTags>
    );
};

export default Tags;

const StyledTags = styled.div`
    position: relative;
    text-align: left;
    font-size: .9rem;
    line-height: 3.2;
    word-break: break-word;
    
    >span {
        margin-right: .4rem;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 .6rem;
        border-radius: .4rem;
        font-weight: 300;
        cursor: default;
        transition: 200ms all;
        background-color: #E4E6EB;
    }
    
    >span:hover {
        background-color: #DADDE2;
    }
`;