import React from "react";
import Portfolio from "../../components/portfolio/Portfolio";

const PortfolioContainer = () => {
    return (
        <>
            {portfolioTable.map((item, i) => {
                return <Portfolio key={i} data={item}/>
            })}
        </>
    );
};

export default PortfolioContainer;

const portfolioTable = [
    {
        'project': 'COAL(코로나 알리미)', //프로젝트 명
        'startDate': '2020.02.03', //프로젝트 시작
        'finishDate': '2020.02.28', //프로젝트 완료
        'description': '코로나 바이러스, 우한 폐렴에 대한 정보를 실시간으로 알려드리고, GPS를 통해서 감염 동선에 위치하는지에 대한 여부를 푸시 알림을 통해 실시간으로 알려드립니다.', //프로젝트 설명
        'images': [
            {
                'img': 'coal-01.png',
                'desc': '메인화면에서는 총 확진자 수와 지역별 확진자 수, 특정 집단별 확진자 수와 해당일의 이슈/개발자 공지를 보여줍니다.'
            },
            {
                'img': 'coal-02.png',
                'desc': '확진자 이동경로와 2km 이내에 있을 경우 Push 알림을 통해 알려줍니다.'
            },
            {
                'img': 'coal-03.png',
                'desc': 'GPS기반 나의 위치로 확진자 이동경로를 확인 할 수 있습니다.'
            },
            {
                'img': 'coal-04.png',
                'desc': '앱을 사용하는 유저들끼리 정보공유를 위한 실시간 채팅을 제공합니다.'
            },
            {
                'img': 'coal-05.png',
                'desc': '주소나 병원명을 입력하여 진료소를 검색하거나 전화 연결을 할 수 있습니다.'
            },
            {
                'img': 'coal-06.png',
                'desc': 'Covid19와 관련된 뉴스 정보를 제공합니다.'
            },
            {
                'img': 'coal-07.png',
                'desc': '관리자 페이지에서 코로나19 현황, 태그별 현황, 지역별 현황을 관리합니다.'
            },
            {
                'img': 'coal-08.png',
                'desc': '우측 네이버지도를 통하여 주소를 얻고 좌측 주소란에 주소를 입력하면 위도와 경도를 추출하여 데이터를 입력합니다.'
            },
            {
                'img': 'coal-09.png',
                'desc': '메인화면에서 보여주는 공지를 한 눈에 볼 수 있는 개발자 화면입니다.'
            },
            {
                'img': 'coal-10.png',
                'desc': '공지사항을 수정할 수 있는 화면입니다.'
            },
            {
                'img': 'coal-11.png',
                'desc': '공지사항을 작성할 수 있는 화면입니다.'
            },
            {
                'img': 'coal-12.png',
                'desc': '채팅창 상단에 공지를 띄울 수 있으며, 채팅방을 확인하며 차단, 답변, 삭제를 할 수 있습니다.'
            },
            {
                'img': 'coal-13.png',
                'desc': '수정기능을 활용하여 해당채팅에 대한 관리자 답변을 추가합니다.'
            },
            {
                'img': 'coal-14.png',
                'desc': '구글플레이 기준 어플 순위입니다.'
            },
            {
                'img': 'coal-15.png',
                'desc': '어플 종료일 채팅창 화면입니다. :)'
            },
        ], //프로젝트 이미지
        'skills': ['HTML', 'CSS', 'AWS', 'Javascript', 'Firebase', 'OracleDB'], //사용 기술
    },
    {
        'project': 'COAL(코로나 알리미)', //프로젝트 명
        'startDate': '2020.02.03', //프로젝트 시작
        'finishDate': '2020.02.28', //프로젝트 완료
        'description': '코로나 바이러스, 우한 폐렴에 대한 정보를 실시간으로 알려드리고, GPS를 통해서 감염 동선에 위치하는지에 대한 여부를 푸시 알림을 통해 실시간으로 알려드립니다.', //프로젝트 설명
        'images': [

        ], //프로젝트 이미지
        'skills': ['HTML', 'CSS', 'AWS', 'Javascript', 'Firebase', 'OracleDB'], //사용 기술
    }
];