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
        'project': 'Glenn Blog', //프로젝트 명
        'startDate': '2020.09.03', //프로젝트 시작
        'finishDate': '2020.09.07', //프로젝트 완료
        'description': 'React를 사용하여 개인 포트폴리오 및 본인소개를 위한 사이트를 개발하였습니다.', //프로젝트 설명
        'images': [
            {
                'img': 'blog-01.png',
                'desc': '프로필 사진과 배경사진 한줄 소개를 보여주는 메인 상단 화면입니다.'
            },
            {
                'img': 'blog-02.png',
                'desc': 'SNS 링크를 소개하고, 개발 스킬과 태그를 사용하여 개발언어에 대한 숙련도를 표시합니다.'
            },
            {
                'img': 'blog-03.png',
                'desc': '진행해온 포트폴리오를 나열하여 간략한 소개와 이미지 그리고 사용 기술을 보여줍니다.'
            },
            {
                'img': 'blog-04.png',
                'desc': '이미지를 클릭하면 해당 이미지의 상세 설명과 큰 사이즈의 이미지를 볼 수 있습니다.'
            },
            {
                'img': 'blog-05.png',
                'desc': '간략한 정보와 각 분야별 사용 기술을 나열하였습니다.'
            },
            {
                'img': 'blog-06.png',
                'desc': '각 년도별 히스토리를 보여주도록 나열하였습니다.'
            },
        ], //프로젝트 이미지
        'skills': ['React','CSS','Javascript'], //사용 기술
    },
    {
        'project': 'COAL(코로나 알리미)', //프로젝트 명
        'startDate': '2020.02.03', //프로젝트 시작
        'finishDate': '2020.02.28', //프로젝트 완료
        'description': '코로나 바이러스, 우한 폐렴에 대한 정보를 실시간으로 알려드리고, GPS를 통해서 감염 동선에 위치하는지에 대한 여부를 푸시 알림을 통해 실시간으로 알려드립니다. <br/>' +
            '이 프로젝트에서 저는 관리자 페이지를 개발하였으며, 이동경로를 삽입, 수정, 삭제하는 Restful API를 개발하였습니다.<br/><br/>' +
            '* 구글 플레이 스토어에서 삭제되었습니다.', //프로젝트 설명
        'images': [
            {
                'img': 'coal-01.png',
                'desc': '가장 메인 화면에서는 지역별, 감염집단별 실시간 현황 파악을 주로 보여주었으며, 해당하는 API를 개발하여 어플과 연결하였습니다.<br/>' +
                    '또한 하단에 긴급 공지사항을 출력하여 해당일의 긴급속보 혹은 개발자의 긴급공지를 보여주었습니다.'
            },
            {
                'img': 'coal-02.png',
                'desc': 'GPS 기능을 사용하여 확진자 이동경로의 좌표와 사용자의 현재위치가 2km 이내인 경우 위험 감지 푸쉬 알림으로 위험지역임을 알려주었습니다.'
            },
            {
                'img': 'coal-03.png',
                'desc': 'GPS에 기반하여 나의 위치와 확진자의 이동경로를 지도상에서 확인할 수 있습니다.<br/>' +
                    '상단 지역을 클릭 할 경우에는 해당지역의 이동경로만 표시됩니다.'
            },
            {
                'img': 'coal-04.png',
                'desc': 'Firebase를 사용하여 어플 사용자들간에 정보공유를 위한 실시간 채팅을 제공하였습니다.'
            },
            {
                'img': 'coal-05.png',
                'desc': '질병관리본부에서 선별진료소를 크롤링하여 주소나 병원명을 입력하여 일치하는 주소의 진료소를 검색할 수 있는 API를 개발하여 사용하였습니다.'
            },
            {
                'img': 'coal-06.png',
                'desc': '코로나와 관련된 뉴스 정보를 제공하였습니다.'
            },
            {
                'img': 'coal-07.png',
                'desc': '*관리자 페이지<br/>' +
                    '관리자 페이지에서 코로나19 현황, 태그별 현황, 지역별 현황을 관리합니다.'
            },
            {
                'img': 'coal-08.png',
                'desc': '우측 네이버지도를 이용하여 주소를 얻고 좌측 주소란에 주소를 입력하면 위도와 경도를 추출하여 데이터를 입력할 수 있습니다.<br/>' +
                    '또한 좌측 하단의 검색창을 사용하여 입력된 주소들을 확인 할 수 있고, 클릭하여 수정 삭제를 할 수 있습니다.'
            },
            {
                'img': 'coal-09.png',
                'desc': '어플 첫번째 화면에서 보여주는 공지를 추가, 수정, 삭제 할 수 있는 관리자 페이지입니다.'
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
                'desc': '좌측 채팅방 공지사항으로 어플 내 채팅창 상단에 공지를 띄울 수 있으며,<br/>' +
                    '우측 영역을 통해 채팅방을 확인하며 차단, 답변(수정), 삭제를 할 수 있습니다.'
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
        'project': 'AIINZ', //프로젝트 명
        'startDate': '2020.02.01', //프로젝트 시작
        'finishDate': '2020.03.28', //프로젝트 완료
        'description': 'SNS 커뮤니티 앱입니다.사용자들 간의 친목을 돕고, 나를 기록 할 수 있는 어플입니다.<br/>' +
            '해당 프로젝트에서는 개발서버를 세팅하고 Java로 개발되어있는 RestfulAPI 코드를 PHP 언어로 변경하였으며, 추가되는 기능에 대한 API를 담당하여 개발하였습니다.<br/>' +
            '또한 어플 내 사용자를 관리하고 어플 버전을 관리할 수 있는 관리자페이지를 개발하였습니다.<br/><br/>' +
            '<a href="https://play.google.com/store/apps/details?id=com.codberg.aiinz" target="_blank">👉 Google Play Store</a>', //프로젝트 설명
        'images': [
            {
                'img': 'aiinz-01.png',
                'desc': ''
            },
            {
                'img': 'aiinz-02.png',
                'desc': ''
            },
            {
                'img': 'aiinz-03.png',
                'desc': '[포스팅] 사진과 내용을 입력한 하나의 포스트를 올려서팔로우한 사람들의 포스팅 목록을 볼 수 있습니다.<br/>' +
                    '[댓글] 포스팅에 댓글을 달 수 있습니다.<br/>' +
                    '[푸시알림] 사용자에게 푸시 알림을 보낼 수 있습니다.<br/>' +
                    '[태그 기능] 사람을 태그하거나, 연관된 해시태그를 등록 할 수 있습니다.'
            },
            {
                'img': 'aiinz-04.png',
                'desc': '[피드] 팔로잉과 팔로워 수를 확인하고, 포스트를 확인할 수 있습니다.'
            },
            {
                'img': 'aiinz-05.png',
                'desc': '[채팅] 사용자와 실시간 채팅을 할 수 있습니다.'
            },
            {
                'img': 'aiinz-06.png',
                'desc': '[사진 촬영 및 필터] 사진을 찍고, 원하는 필터를 입힐 수 있습니다.'
            },
            {
                'img': 'aiinz-07.png',
                'desc': '관리자페이지 로그인 화면입니다.'
            },
            {
                'img': 'aiinz-08.png',
                'desc': '어플 버전을 확인하고 수정할 수 있는 메인화면입니다.'
            },
            {
                'img': 'aiinz-09.png',
                'desc': '회원관리를 할 수 있는 페이지 입니다.'
            },
            {
                'img': 'aiinz-10.png',
                'desc': '게시물을 관리할 수 있는 페이지 입니다.'
            },
        ], //프로젝트 이미지
        'skills': ['PHP','MySQL','Firebase','Java','AWS'], //사용 기술
    },
    {
        'project': 'SteveLabs', //프로젝트 명
        'startDate': '2020.01.03', //프로젝트 시작
        'finishDate': '2020.02.03', //프로젝트 완료
        'description': 'COAL(코로나 알리미)를 개발한 팀 렌딩 페이지 입니다.<br/>' +
            'AWS를 사용하여 개발서버를 세팅하고 메일전송기능을 추가하였으며, 퍼블리싱을 진행하였습니다.<br/><br/>' +
            '<a href="https://stevelabs.co" target="_blank">👉 SteveLabs</a>', //프로젝트 설명
        'images': [
            {
                'img': 'stevelabs-01.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-02.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-03.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-04.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-05.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-06.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-07.png',
                'desc': ''
            },
            {
                'img': 'stevelabs-08.png',
                'desc': ''
            },
        ], //프로젝트 이미지
        'skills': ['HTML','Javascript','CSS'], //사용 기술
    },
    {
        'project': 'GENESIS EX', //프로젝트 명
        'startDate': '2019.10.29', //프로젝트 시작
        'finishDate': 'develop ing', //프로젝트 완료
        'description': '가상화폐 거래소 입니다. AWS를 이용하여 서버를 세팅하였습니다.<br/>' +
            '프론트엔드에서는 전반적인 PC화면과 모바일 메인화면, 모바일 거래소 화면 등을 개발하였습니다. 또한 관리자 페이지 개발을 진행하였으며,<br/>' +
            '백엔드 부분에서는 회원기능과 게시판 기능, OTP인증 등 개발하였습니다.<br/><br/>' +
            '<a href="https://genesis-ex.com/" target="_blank">👉 GENESIS EX</a>', //프로젝트 설명
        'images': [
            {
                'img': 'genesis-01.png',
                'desc': ''
            },
            {
                'img': 'genesis-02.png',
                'desc': ''
            },
            {
                'img': 'genesis-03.png',
                'desc': ''
            },
            {
                'img': 'genesis-04.png',
                'desc': ''
            },
            {
                'img': 'genesis-05.png',
                'desc': ''
            },
            {
                'img': 'genesis-06.png',
                'desc': ''
            },
            {
                'img': 'genesis-07.png',
                'desc': ''
            },
            {
                'img': 'genesis-08.png',
                'desc': ''
            },
        ], //프로젝트 이미지
        'skills': ['HTML', 'CSS', 'AWS', 'Javascript', 'MySQL'], //사용 기술
    },
    {
        'project': 'nCube', //프로젝트 명
        'startDate': '2020.03.04', //프로젝트 시작
        'finishDate': '2020.03.11', //프로젝트 완료
        'description': '렌딩 페이지 퍼블리싱을 진행하였습니다.<br/><br/>' +
            '<a href="http://ncube.world/" target="_blank">👉 N Cube</a>', //프로젝트 설명
        'images': [
            {
                'img': 'ncube-01.png',
                'desc': ''
            },
            {
                'img': 'ncube-02.png',
                'desc': ''
            },
            {
                'img': 'ncube-03.png',
                'desc': ''
            },
            {
                'img': 'ncube-04.png',
                'desc': ''
            },
            {
                'img': 'ncube-05.png',
                'desc': ''
            },
            {
                'img': 'ncube-06.png',
                'desc': ''
            },
        ], //프로젝트 이미지
        'skills': ['HTML', 'CSS', 'AWS', 'Javascript'], //사용 기술
    }
];