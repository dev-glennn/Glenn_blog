import React, {useEffect, useState} from "react";
import Header from "../../components/common/Header";
import Gnb from "../../components/common/Gnb";
import {useHistory} from "react-router-dom";

const HeaderContainer = () => {

    const history = useHistory();

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent, true);
    }, []);

    const scrollEvent = (e) => {
        console.log('hi')
    }

    return (
        <>
            {/*<Header animateClass={animateClass}/>*/}
            <Header/>
            <Gnb menus={gnbMenus} activeMenu={history.location.pathname}/>
        </>
    );
};

export default HeaderContainer;

const gnbMenus = [
    {
        path: '/',
        name: '타임라인'
    }, {
        path: '/about',
        name: '정보'
    }, {
        path: '/resume',
        name: '히스토리'
    }, {
        path: '/portfolio',
        name: '포트폴리오'
    },
];
