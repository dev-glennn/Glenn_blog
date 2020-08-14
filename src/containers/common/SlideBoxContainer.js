import React, {useEffect, useState} from "react";
import SlideBox from '../../components/common/SlideBox';
import {useHistory} from "react-router-dom";

const SlideBoxContainer = ({dept, children}) => {

    const history = useHistory();
    const active = (history.location.pathname === '/') ? 'about' : (history.location.pathname).replace(/\//gi,'');
    const [menu, setMenu] = useState(active);

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

    const activeMenu = orgMenus.find((item) => (item.name).toLowerCase() === menu);
    const menusCount = orgMenus.length;

    const menus = orgMenus.map((item, index) => {
        const id = item.id;
        const activeId = activeMenu.id;
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