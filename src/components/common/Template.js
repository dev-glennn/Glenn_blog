import React from "react";
import styled from "styled-components";
import '../../template.css';
import HeaderContainer from "../../containers/common/HeaderContainer";

const Template = ({children}) => {

    return (
        <>
            <StyledHeader>
                <HeaderContainer/>
            </StyledHeader>
            <StyledBody>
                <div className="sm-width">
                    {children}
                </div>
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
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledBody = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    text-align: left;
    height: 1000px;
`;