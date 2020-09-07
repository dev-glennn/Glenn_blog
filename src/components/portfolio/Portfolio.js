import React from "react";
import styled from "styled-components";
import PortfolioImgContainer from "../../containers/timeline/PortfolioImgContainer";

const Portfolio = ({data}) => {
    const {project, startDate, finishDate, description, images, skills} = data;

    const info = {
        'project': project,
        'period': startDate + ' ~ ' + finishDate
    };

    return (
        <StyledPortfolio className="col portfolio-col">
            <StyledHead>
                <img className="pf-profile" src="/common/profile.png" alt="profile"/>
                <div className="pf-title">
                    <p className="pf-name">{project}</p>
                    <p className="pf-period">{startDate + ' ~ ' + finishDate}</p>
                </div>
            </StyledHead>
            <StyledBody>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </StyledBody>
            {
                (images.length > 0) ? <PortfolioImgContainer info={info} images={images}/> : ''
            }
            <StyledTag>
                {skills.map((item, i) => {
                    return <span key={i}>{item}</span>
                })}
            </StyledTag>
        </StyledPortfolio>
    );
};

export default Portfolio;

const StyledTag = styled.div`
    width: 100%;
    padding: 0 1.14rem 1.14rem;
    
    >span {
        display: inline-flex;
        padding: 0 .5rem;
        align-items: center;
        height: 2rem;
        border-radius: 1rem;
        background-color: #E4E6EB;
        font-size: .8rem;
        font-weight: 300;
        cursor: default;
    }
    
    >span:hover {
        background-color: #DADDE2;
    }
    
    span+span {
        margin-left: .4rem;
    }
`;

const StyledBody = styled.div`
    padding: 0.28rem 1.14rem 1.14rem;
    font-size: 1rem;
`;

const StyledHead = styled.div`
    padding: 0.85rem 1.14rem 0;
    margin-bottom: 0.85rem;
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

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 !important;
`;