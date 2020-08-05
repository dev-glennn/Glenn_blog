import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {changeMenu} from '../../modules/menu';
import SlideBox from '../../components/common/SlideBox';

import AboutPage from "../../pages/AboutPage";
import PortfolioPage from "../../pages/PortfolioPage";
import ResumePage from "../../pages/ResumePage";
import ContactPage from "../../pages/ContactPage";
import Gnb from '../../components/common/Gnb';


const slideItems = [
    {
        id: 1,
        name: 'About',
        href: '/about',
        component: 'AboutPage',
    },
    {
        id: 2,
        name: 'Resume',
        href: '/resume',
        component: 'ResumePage',
    },
    {
        id: 3,
        name: 'Contact',
        href: '/contact',
        component: 'ContactPage',
    },
    {
        id: 4,
        name: 'Portfolio',
        href: '/portfolio',
        component: 'PortfolioPage',
    }
];

const SlidesBoxContainer = ({type}) => {

    const dispatch = useDispatch();
    const reduxMenu = useSelector(menu => menu.menu.menu);
    const [menu, setMenu] = useState(reduxMenu);

    useEffect(() => {
        // 메뉴 변경됨
    }, [menu]);

    const changeMenu = (e) => {
        const dataMenu = e.target.dataset.menu;
        setMenu(dataMenu);
    }

    return (
        <>
            <SlideBox type="menu">
                <Gnb menus={slideItems} changeMenu={changeMenu}/>
                {/*<NavLink to={"/about"} data-menu="about" onClick={(e) => changeMenu(e)}>About</NavLink>*/}
                {/*<NavLink to={"/history"} data-menu="history" onClick={changeMenu}>History</NavLink>*/}
            </SlideBox>
            <SlideBox type="content">
                <AboutPage/>
                <PortfolioPage/>
                <ResumePage/>
                <ContactPage/>
                {/*<div data-content="about">어바웃~</div>*/}
                {/*<div data-content="history">히스토리~</div>*/}
            </SlideBox>
        </>
    );
};

export default SlidesBoxContainer;