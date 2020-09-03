import React from "react";
import styled from "styled-components";
import '../../template.css';
import HeaderContainer from "../../containers/common/HeaderContainer";
import Gnb from "./Gnb";

const Template = ({children}) => {
    return (
        <>
            <StyledHeader>
                <HeaderContainer/>
                <Gnb/>
            </StyledHeader>
            <StyledBody>
                {children}
            </StyledBody>
        </>
    );
};

export default Template;

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    background-color: #FFF;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
`;

const StyledBody = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    text-align: left;
`;