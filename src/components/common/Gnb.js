import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GnbMenu from './GnbMenu';
import {useHistory} from "react-router-dom";

const Gnb = ({menus,changeMenu}) => {

    // const history = useHistory();
    // const active = (history.location.pathname === '/') ? '/about' : history.location.pathname;
    // const activeId = menus.filter(menu => menu.address === active)[0].id;

    return (
        <StyledGnb>
            {menus.map(menu => (
                <GnbMenu
                    key={menu.id}
                    menu={menu}
                    changeMenu={changeMenu}
                    // activeId={activeId}
                />
            ))}
        </StyledGnb>
    );
};

export default Gnb;

const StyledGnb = styled.ul`
    position: relative;
    display: block;
    list-style: none;
    width: 33.33%;
    max-width: 26.2rem;
    min-height: 10.2rem;
    margin: 0;
    padding: 0;
`;