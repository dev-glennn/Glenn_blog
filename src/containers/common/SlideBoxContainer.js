import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import SlideBox from '../../components/common/SlideBox'

const SlideBoxContainer = ({dept, children}) => {

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

    const orgMenus = children.map((item, index) => {
        return {
            'id': index,
            'name': item.props.name,
            'address': item.props.path,
        };
    });

    const activeMenu = orgMenus.find((item) => (item.name).toLowerCase() === menu)
    const menusCount = orgMenus.length;

    const menus = orgMenus.map((item, index) => {
        const id = item.id;
        const activeId = activeMenu.id;
        console.log(activeId-1);
        const activePrevId = (activeId - 1 < 0) ? menusCount - 1 : activeId - 1;
        const activeNextId = (activeId + 1 >= menusCount) ? 0 : activeId + 1;
        let className = '';
        if (id === activeId) {
            className = 'current';
        } else if (id === activePrevId) {
            className = 'prev';
        } else if (id === activeNextId) {
            className = 'next';
        }
        item.className = className;
        return item;
    })

    return (
        <SlideBox
            menus={menus}
            changeMenu={changeMenu}
            dept={dept}
        >
            {children}
        </SlideBox>
    );
};

export default SlideBoxContainer;