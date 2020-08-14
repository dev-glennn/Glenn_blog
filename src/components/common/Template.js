import React from "react";
import styled from "styled-components";
import '../../template.css';

const Template = ({children}) => {
    return (
        <StyledTemplate>
            {children}
        </StyledTemplate>
    );
};

export default Template;

const StyledTemplate = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    text-align: left;
`;