import React from "react";
import styled from "styled-components";

const SlideBox = ({type, children}) => {

    return (
        <StyledSlideBox>
            {children}
        </StyledSlideBox>
    );
};

export default SlideBox;

const StyledSlideBox=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;