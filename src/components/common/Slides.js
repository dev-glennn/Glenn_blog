import React from 'react';
import {Slide} from 'react-slideshow-image';
import styled, {css} from 'styled-components';
import {GrNext, GrPrevious} from "react-icons/gr";

const SlideItem = ({image, bgType}) => {
    return (
        <EachSlide className="each-slide" bgType={bgType && image}>
            <div className="slide-image" style={{'backgroundImage': `url(${image})`}}></div>
        </EachSlide>
    );
};


const Slides = ({slideItems, bgType, navEvent}) => {
    /* 슬라이드 이미지 타입을 정의 */
    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        arrows: true,
        pauseOnHover: true,
        autoplay: false,
        prevArrow: <GrPrevious/>,
        nextArrow: <GrNext/>,
        onChange: (previous, next) => {
            navEvent(previous,next);
        }
    }

    return (
        <SlideContainer className="slide-container">
            <Slide {...properties}>
                {slideItems.map((slideItem, i) => (
                    <SlideItem key={i} image={'portfolio/' + slideItem.img} bgType={bgType}/>
                ))}
            </Slide>
        </SlideContainer>
    );
};

export default Slides;


const SlideContainer = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    overflow : hidden;
   
   .images-wrap{
        display: flex;
   }
   
   >div, .react-slideshow-container, .react-slideshow-wrapper, .images-wrap {
        max-height: 100vh;
        height: 100%;
   }
   
   .react-slideshow-container >.nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 500;
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 1.7rem;
        background-color: #e4e6eb;
        border: 0;
        padding: .9rem;
        cursor: pointer;
   }
   
   .react-slideshow-container >.nav[data-type='prev'] {
        left: 1.14rem;
   }
   
   .react-slideshow-container >.nav[data-type='next'] {
        right: 1.14rem;
   }
`;

const EachSlide = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
    height: 100%;

   .slide-image{
        width : 80%;
        max-height: 100vh;
        height: 100%;
        max-width: 100vw;
        background-size : contain;
        background-position : center;
        background-repeat : no-repeat;
        z-index: 200;
   }
   
   &:before {
        z-index: 101;
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        content: '';
        background-color: rgba(0, 0, 0, .7);
    }

    &:after {
        filter: blur(5px);
        position: absolute;
        width: 105%;
        height: 105%;
        display: block;
        content: '';
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 50% 50%;
     ${({bgType}) => {
    return css`background-image: url('${bgType}')`;
}}
    }
`;
