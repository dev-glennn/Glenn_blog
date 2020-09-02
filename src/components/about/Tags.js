import React from "react";
import styled from "styled-components";

const Tags = () => {

    const tags = ['Javascript', 'php', 'ReactJS', 'nodeJS', 'Java', 'Oracle', 'AWS', 'MySQL', 'MariaDB', 'MongoDB'];

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
    font-size: 1.2rem;
    line-height: 1.7;
    word-break: break-word;
    
    >span {
        margin-right: .4rem;
        color: rgba(176, 179, 184, .6);
        font-weight: 300;
        cursor: default;
        transition: 200ms all;
    }
    
    >span:hover {
        color: rgb(176 179 184);
    }
`;