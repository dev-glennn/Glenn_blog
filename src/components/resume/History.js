import React from "react";
import styled from "styled-components";

const historyTable = [
    {'2020': [{'07.15': '코드베르그 퇴사'}, {'02.22': '한양사이버대학교 졸업'}]},
    {'2019': [{'04.15': '코드베르그 입사'}]},
    {'2018': [{'03.02': '한양사이버대학교(아동학과) 편입'}, {'02.05': '한양여자대학교 졸업'}, {'02.00': '인터파크 투어 인턴쉽 종료'}]},
    {'2017': [{'08.16': '인터파크 투어 인턴쉽 시작'}]},
    {'2016': [{'03.02': '서산여자고등학교 졸업'}, {'02.26': '한양여자대학교(호텔관광과) 입학'}]},
    {'2013': [{'03.00': '서산여자고등학교 입학'}]}
];

const HistoryItem = ({data}) => {
    return (
        <>
            {
                data.map((item, index) => {
                    const dateArr = Object.keys(item)[0].split('.');
                    let date = dateArr[0] + '월';
                    if (dateArr[1] !== '00') {
                        date += ' ' + dateArr[1] + '일';
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

const History = () => {
    return (
        <StyledHistory>
            {historyTable.map((item, index) => {
                const year = Object.keys(item)[0];
                const data = Object.values(item)[0];

                return (
                    <div key={index} className="history-box">
                        <div className="history-left">
                            <div className="history-year">
                                {year}
                            </div>
                            <div className="history-line"/>
                        </div>
                        <div className="history-right">
                            <HistoryItem data={data}/>
                        </div>
                    </div>
                );
            })}
        </StyledHistory>
    );
};

export default History;

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    .history-box:first-child .history-year{
        background-color: #9EB4FD !important;
    }
    
    >.history-box {
        display: flex;
        width: 95%;
        
        >.history-left {
            position: relative;
            min-width: 5rem;
            margin-right: 2.9rem;
            display: flex;
            flex-direction: column;
            
            >.history-year {
                position: relative;
                width: 5rem;
                height: 5rem;
                font-size: 1rem;
                color: #fff;
                font-weight: bold;
                background-color: #A7AABD;
                border-radius: 2.5rem;
                display: inline-block;
                text-align: center;
                line-height: 5rem;
            }
        }
        
        .history-line:after {
            display: inline-block;
            content: '';
            width: 1px;
            height: 100%;
            background-color: rgba(167, 170, 189, .5);
            position: absolute;
            top: 0;
            left: 50%;
        }
        
        .history-line {
            position: relative;
            width: 100%;
            display: inline-block;
            flex: 1;
            margin: .5rem 0;
        }
        
        >.history-right {
            flex: 1;
            
            >.history-item {
                border: 1px solid rgba(66, 69, 84, .2);
                padding: 1rem 1.3rem;
                margin-bottom: 1.3rem;
                
                >p {
                    margin: 0;
                    font-weight: 300;
                }
                
                >.history-date {
                    margin-bottom: .6em;
                    color: #A7AABD;
                    font-style: italic;
                    font-size: 1rem;
                }
                
                >.history-text {
                    font-size: 1.18rem;
                }
            }
        }
    }
`;