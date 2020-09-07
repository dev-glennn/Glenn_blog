import React from "react";
import Header from "../../components/common/Header";
import Gnb from "../../components/common/Gnb";
import {useHistory} from "react-router-dom";

const HeaderContainer = () => {

    const history = useHistory();

    return (
        <>
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
    },
];
