import React, {useEffect, useRef, useState} from 'react';
import {Slide} from 'react-slideshow-image';
import styled, {css} from 'styled-components';
import {GrNext, GrPrevious} from "react-icons/gr";

/* 슬라이드 이미지 타입을 정의 */
const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true,
    autoplay: false
};

const SlideItem = ({image, bgType}) => {
    return (
        <EachSlide className="each-slide" bgType={bgType && image}>
            <div className="slide-image" style={{'backgroundImage': `url(${image})`}}></div>
        </EachSlide>
    );
};

const Slides = ({slideItems, bgType, navEvent, defaultIndex}) => {
    const slideRef = useRef();

    const [changeType, setChangeType] = useState(null);
    const [changeResult, setChangeResult] = useState(false);

    properties.onChange = () => {
        setChangeResult(true);
    };

    properties.defaultIndex = defaultIndex;

    const goSlide = (type) => {
        setChangeType(type);
        if (type === 'prev') {
            slideRef.current.goBack();

        }
        if (type === 'next') {
            slideRef.current.goNext();

        }
    };

    useEffect(() => {
        if (changeResult === true) {
            navEvent && navEvent(changeType);
            setChangeResult(false);
        }
    }, [changeType, changeResult, navEvent]);

    return (
        <SlideContainer className="slide-container">
            <Slide ref={slideRef} {...properties}>
                {slideItems.map((slideItem, i) => (
                    <SlideItem key={i} image={'portfolio/' + slideItem.img} bgType={bgType}/>
                ))}
            </Slide>
            <div className="autoplay-buttons custom-slide-nav">
                <button type="button" className="nav-prev" onClick={() => goSlide('prev')}><GrPrevious/></button>
                <button type="button" className="nav-next" onClick={() => goSlide('next')}><GrNext/></button>
            </div>
        </SlideContainer>
    );
};

export default Slides;

Slides.defaultProps = {
    defaultIndex: 0
}


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
   
   .custom-slide-nav > button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 500;
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 1.7rem;
        background-color: #FFFFFF;
        border: 0;
        padding: .9rem;
        cursor: pointer;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
   }
   
   .custom-slide-nav > button:hover, .custom-slide-nav > button:active {
        background-color: #F2F2F2;
   }
   
   .custom-slide-nav > button:active {
        transform: translateY(-50%) scale(.97);
   }
   
   .custom-slide-nav .nav-prev {
        left: 1.14rem;
   }
   
   .custom-slide-nav .nav-next {
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
        height: 90%;
        max-width: 100vw;
        margin: auto;
        background-position : center;
        background-size: contain;
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
        background-size: cover;
        background-position: 50% 50%;
     ${({bgType}) => {
    return css`background-image: url('${bgType}')`;
}}
    }
`;
