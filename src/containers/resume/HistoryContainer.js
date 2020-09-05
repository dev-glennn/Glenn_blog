import React from "react";
import History from "../../components/resume/History";

const HistoryContainer = ({match}) => {
    const year=match.params.year||'all';
    const sortHistory = historyTable.sort((a, b) => (Object.keys(b)[0] - Object.keys(a)[0]));
    const newHistory = (year === 'all') ? sortHistory : sortHistory.filter((i) => (Object.keys(i)[0] === year));
    const newYearTable = sortHistory.map((item) => (Object.keys(item)[0]));

    return (
        <History year={year} yearTable={newYearTable} historyTable={newHistory}/>
    );
};

export default HistoryContainer;

const historyTable = [
    {'2020': [{'07.15': '코드베르그 퇴사'}, {'02.22': '한양사이버대학교 졸업'}]},
    {'2019': [{'04.15': '코드베르그 입사'}]},
    {'2018': [{'03.02': '한양사이버대학교(아동학과) 편입'}, {'02.05': '한양여자대학교 졸업'}, {'02.00': '인터파크 투어 인턴쉽 종료'}]},
    {'2017': [{'08.16': '인터파크 투어 인턴쉽 시작'}]},
    {'2016': [{'03.02': '서산여자고등학교 졸업'}, {'02.26': '한양여자대학교(호텔관광과) 입학'}]},
    {'2013': [{'03.00': '서산여자고등학교 입학'}]}
];