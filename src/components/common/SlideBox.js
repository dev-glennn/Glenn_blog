import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";

const SlideBox = ({children, menus, dept, changeMenu}) => {

    return (
        <>
            <StyledGnb>
                <Gnb
                    menus={menus}
                    dept={dept}
                    changeMenu={changeMenu}
                />
            </StyledGnb>
            <StyledSildeBox>
                {children.map((item, index) => {
                    return <div key={index}
                                className={(menus[index].className) ? 'content-' + menus[index].className : ''}
                    >{children[index]}</div>;
                })}
            </StyledSildeBox>
        </>
    );
};

export default SlideBox;

SlideBox.defaultProps = {
    width: 80,
    dept: 3,
}

const StyledSildeBox = styled.div`
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    >div {
        position: absolute;
        padding: 2.14rem 2rem 5rem;
        width: 100%;
        visibility: hidden;
        opacity: 0;
        transition: 300ms all;
    }
    
    >.content-prev{
        visibility: visible;
        left: -100%;
        opacity: .5;
    }
    
    >.content-current{
        visibility: visible;
        left: 0;
        opacity: 1;
    }
    
    >.content-next{
        visibility: visible;
        left: 100%;
        opacity: .5;
    }
`;

const StyledGnb = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;