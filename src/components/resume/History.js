import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const HistoryItem = ({data}) => {
    return (
        <>
            {
                data.map((item, index) => {
                    const dateArr = Object.keys(item)[0].split('.');
                    let date = dateArr[0] + '';
                    if (dateArr[1] !== '00') {
                        date += '.' + dateArr[1] + '';
                    }
                    const text = Object.values(item)[0];
                    return (
                        <div key={index} className="history-item">
                            <p className="history-date">{date}</p>
                            <p className="history-text">{text}</p>
                        </div>
                    );
                })
            }
        </>
    );
};

const History = ({yearTable, historyTable}) => {
    return (
        <StyledHistory>
            <StyledYearTable>
                <h2 className="font-lg">히스토리</h2>
                <ul>
                    <li><NavLink to="/resume" activeClassName="active" exact>전체</NavLink></li>
                    {yearTable.map((item, i) => {
                        return (
                            <li key={i}><NavLink to={"/resume/" + item} activeClassName="active" exact>{item}년</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </StyledYearTable>
            <StyledHistoryTable>
                {historyTable.map((item, index) => {
                    const year = Object.keys(item)[0];
                    const data = Object.values(item)[0];

                    return (
                        <div key={index} className="history-box">
                            <h3>{year}</h3>
                            <HistoryItem data={data}/>
                        </div>
                    );
                })}
            </StyledHistoryTable>
        </StyledHistory>
    );
};

export default History;

const StyledHistoryTable = styled.div`
    flex: 1;
    padding-left: 1.14rem;
    
    >.history-box {
        margin-bottom: 2.5rem;
    }
    
    >.history-box:last-child {
        margin-bottom: 0;
    }
    
    >.history-box > h3 {
        font-size: 1.2rem;
    }
    
    .history-item {
        margin-bottom: 1rem;
        display: flex;
        font-size: 1rem;
        width: 100%;
        
        >p {
            margin: 0;
        }
        
        .history-date {
            min-width: 10%;
            color: #65676B;
            font-size: .9rem;
            font-weight: 600;
        }
    }
    
`;

const StyledYearTable = styled.div`
    border-right: 1px solid #ced0d4;
    width: 25%;
    margin: -1.14rem 0 -1.14rem -1.14rem;
    padding: 1.14rem 0;
    
    >h2 {
        padding: 0 1.14rem;
    }
    
    >ul {
        margin: 0;
        padding: 0 .4rem;
        list-style: none;
        
        >li {
            width: 100%;
            
            >a {
                z-index: 1;
                position: relative;
                display: inline-block;
                width: 100%;
                margin-bottom: 0.28rem;
                padding: 0.7rem;
                font-weight: bold;
                border-radius: .42rem;
                color: #65676B;
            }
            
            >a:not(.active):hover:before {
                z-index: -1;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                display: inline-block;
                content: '';
                width: 100%;
                height: 100%;
                background-color: #f2f2f2;
                border-radius: .6rem;
            }
            
            >a:not(.active):active:before {
                background-color: #e5e5e5;
            }
            
            >a.active {
                background-color: #e7f3ff;
                color: #385898;
            }
        }
    }
`;

const StyledHistory = styled.div`
    display: flex;
`;