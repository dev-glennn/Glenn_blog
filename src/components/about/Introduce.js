import React, {useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

const Introduce = () => {

    const rotateIntroArr = [
        '조민주입니다.',
        '24살 입니다.',
        '웹 개발자입니다.',
        '화이팅 하겠습니다.',
        '미국드라마를 즐겨봅니다.',
        '카페에서 나오는 음악들을 좋아합니다.',
    ];

    useEffect(() => {
        const rotateItems = document.querySelectorAll('.rotate-item');
        const rotateItemCount = document.getElementsByClassName('rotate-intro')[0].childNodes.length;
        let rotateOrder = 1;

        setInterval(() => {
            let prevRotateOrder = (rotateOrder === 0) ? rotateItemCount - 1 : rotateOrder - 1;
            rotateItems[prevRotateOrder].classList.remove('fadeIn');
            rotateItems[prevRotateOrder].classList.add('fadeOut');
            rotateItems[rotateOrder].classList.remove('fadeOut');
            rotateItems[rotateOrder].classList.add('fadeIn');
            rotateOrder++;
            if (rotateOrder >= rotateItemCount) {
                rotateOrder = 0;
            }
        }, 2500);
    }, []);

    return (
        <StyledIntroduce>
            <p>안녕하세요. 저는
                <span className="rotate-intro">
                    {rotateIntroArr.map((item, index) => {
                        return <span key={index}
                                     className={(index === 0) ? "rotate-item fadeIn" : "rotate-item"}>{item}</span>;
                    })}
                </span>
            </p>
            <p>주 사용 언어는 Javascript 와 php 이며, 프론트 개발과 백엔드 개발에 관심이 있습니다.</p>
            <p>항상 배움을 멈추지 않겠습니다.</p>
        </StyledIntroduce>
    );
};

export default Introduce;

const StyledIntroduce = styled.div`
    position: relative;
    text-align: left;
    font-size: 1.5rem;
    line-height: 1.5;
    
    >p {
        display: flex;
        align-items: center;
        margin: 0 0 .1rem;
        font-weight: 300;
        
        .rotate-intro {
            font-weight: bold;
            font-size: 1.7rem;
            vertical-align: top;
            margin: 0 0 0 .5rem;
            position: relative;
            display: inline-block;
            text-align: left;
            min-height: 2.5rem;
            min-width: 23.5rem;
            
            .rotate-item {
                opacity: 0;
                line-height: 1.5;
                display: inline-block;
                position: absolute;
                white-space: nowrap;
              
            }
            
            .rotate-item.fadeOut {
                ${(props) => {
    return css`animation: ${rotateOut} .5s linear forwards;`
}}
            }
            
            .rotate-item.fadeIn {
                ${(props) => {
    return css`animation: ${rotateIn} .5s linear forwards;`
}}
            }
        }
    }
`;

const rotateIn = keyframes`
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
`;

const rotateOut = keyframes`
    0% {
       opacity: 1;
       transform: translateY(0);
    }
    100% {
       opacity: 0;
       transform: translateY(30px);
    }
`;
