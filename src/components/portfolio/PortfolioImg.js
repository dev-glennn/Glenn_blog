import React from "react";
import styled, {css} from "styled-components";

const PortfolioImg = ({images, width, count, openImage}) => {

    return (
        <StyledPortfolioImgs width={width}>
            {images.map((item, i) => {
                return (
                    <StyledPortfolioImg key={i} count={count} onClick={() => openImage(i)}>
                        <img src={'/portfolio/' + item.img} alt={item.desc}/>
                    </StyledPortfolioImg>
                )
            })}
        </StyledPortfolioImgs>
    );
};

export default PortfolioImg;

const StyledPortfolioImg = styled.div`
    position: absolute;
    
    >img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    
    ${({count}) => {
    let style = '';
    switch (count) {
        case 1:
            style = `
                width: 100%;
                height:100%;
                top: 0;
                left: 0;
            `;
            break;
        case 2:
            style = `
                width: calc(50% - 1px);
                height: 100%;
                top: 0;
                &:first-child {
                    left: 0;
                }
                &:nth-child(2) {
                    left: calc(50% + 1px);
                }
            `;
            break;
        case 3:
            style = `
                height: calc(50% - 1px);
                &:first-child, &:nth-child(2) {
                    width: calc(50% - 1px);
                    top: 0;
                } 
                &:first-child {
                    left: 0;
                }
                &:nth-child(2) {
                    left: calc(50% + 1px);
                }
                &:nth-child(3) {
                    width: 100%;
                    top: calc(50% + 1px);
                    left: 0;
                }
            `;
            break;
        case 4:
            style = `
                height: calc(50% - 1px);
                width: calc(50% - 1px);
                
                &:first-child, &:nth-child(2) {
                    top: 0;
                } 
                &:nth-child(3), &:nth-child(4) {
                    bottom: 0;
                }
                &:first-child, &:nth-child(3) {
                    left: 0;
                }
                &:nth-child(2), &:nth-child(4) {
                    right: 0;
                }
            `;
            break;
        case 5:
        default:
            style = `
                &:first-child, &:nth-child(2) {
                    width: calc(50% - 1px);
                    top: 0;
                } 
                &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                    width: calc(33.33% - 1.5px);
                    bottom: 0;
                }
                &:first-child, &:nth-child(3) {
                    left: 0;
                }
                &:nth-child(2), &:nth-child(5) {
                    right: 0;
                }
                &:nth-child(4) {
                    left: calc(33.3% + .5px);
                }
                
                &:first-child:after, &:nth-child(2):after {
                  content: "";
                  width: calc(50% - 1px);
                  display: block;
                  padding-bottom: 100%;
                }
                
                &:nth-child(3):after, &:nth-child(4):after, &:nth-child(5):after {
                  content: "";
                  width: calc(33.33% - 1px);
                  display: block;
                  padding-bottom: 100%;
                }
                
                >img {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `;
            break;
    }
    if (count > 5) {
        style += `
        &:nth-child(5):before {
                display: inline-flex;
                content: '${'+' + (count - 5) + '장'}';
                position: absolute;
                bottom: 0;
                right: 0;
                background-color: rgb(0 0 0 / 0.4);
                z-index: 100;
                width: 100%;
                height: 100%;
                color: #FFF;
                font-weight: bold;
                font-size: 2rem;
                align-items: center;
                justify-content: center;
        }
        `;
    }

    return css`${style}`;
}}
`;

const StyledPortfolioImgs = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1.14rem;
    ${({width}) => {
    return css`padding-top: ${width}px`;
}}
`;