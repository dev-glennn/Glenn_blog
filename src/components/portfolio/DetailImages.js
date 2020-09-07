import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {CgClose} from "react-icons/cg";
import Slides from "../common/Slides";

const DetailImages = ({visible, images, closeEvent, info, selectImage}) => {

    const [thisNumber, setThisNumber] = useState(selectImage);
    const [description, setDesc] = useState(images[thisNumber].desc);

    useEffect(() => {
        setDesc(images[thisNumber].desc);
    }, [images, thisNumber]);

    const changeSelectImage = (type) => {
        const maxImages = images.length - 1;
        let number = 0;
        if (type === 'prev') {
            const prevNum = thisNumber - 1;
            number = prevNum < 0 ? maxImages : prevNum;
            setThisNumber(number);
        } else if (type === 'next') {
            const nextNum = thisNumber + 1;
            number = nextNum > maxImages ? 0 : nextNum;
            setThisNumber(number);
        }
    };

    const closePopup = () => {
        closeEvent();
    };

    return (
        <StyledModal visible={visible} className="pf-modal">
            <StyledImageArea className="styled-image-area">
                <button type="button" className="pf-close" onClick={closePopup}>
                    <CgClose/>
                </button>
                <StyledImages className="styled-images">
                    <Slides className="styled-slides" slideItems={images} bgType={true}
                            navEvent={changeSelectImage} defaultIndex={selectImage}/>
                </StyledImages>
            </StyledImageArea>
            <StyledDescArea>
                <StyledHead>
                    <img className="pf-profile" src="common/profile.png" alt="프로필 이미지"/>
                    <div className="pf-title">
                        <p className="pf-name">{info.project}</p>
                        <p className="pf-period">{info.period}</p>
                    </div>
                </StyledHead>
                <StyledDesc>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                </StyledDesc>
            </StyledDescArea>
        </StyledModal>
    );
};

export default DetailImages;

const StyledDesc = styled.div`
    margin: 0 .85rem .85rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    color: #050505;
    border-bottom: 1px solid #ddd;
`;

const StyledHead = styled.div`
    padding: 0.85rem 0.85rem 0;
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    display: flex;
    
    >.pf-profile {
        width: 2.85rem;
        height: 2.85rem;
        border-radius: 1.425rem;
        margin-right: .5rem;
    }
    
    >.pf-title {
        flex: 1;
        >p {
            margin: 0;
        }
        >.pf-name {
            margin-top: .28rem;
            font-size: 1.07rem;
            color: #050505;
            font-weight: bold; 
        }
        >.pf-period {
            font-size: .92rem;
            color: #65676B;
        }
    }
`;

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #FFF;
    z-index: 1000;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    
    @media screen and (max-width: 930px) {
        & {
            flex-direction: column;
            
            >* {
                max-width: 100% !important;
                width: 100% !important;
            }
        }
    }
`;

const StyledDescArea = styled.div`
    height: 100%;
    width: 25.7rem;
    
    @media screen and (max-width: 930px) {
        & {
            min-height: 30%;
            height: 30% !important;
            overflow: scroll;
        }
    }
`;

const StyledImages = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: inline-block;
    flex: 1;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content :center;
    align-items : center;
`;

const StyledImageArea = styled.div`
    height: 100%;
    flex: 1;
    max-width: calc(100% - 25.7rem);
    
    >.pf-close {
        position: absolute;
        top: 1.14rem;
        left: 1.14rem;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 1.4rem;
        background-color: #e4e6eb;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        z-index: 200;
        cursor: pointer;
    }
    @media screen and (max-width: 930px) {
        & {
            height: 100% !important;
            max-height: 80% !important;
        }
    }
`;