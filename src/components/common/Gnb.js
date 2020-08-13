import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import GnbMenu from './GnbMenu';
import {useHistory} from "react-router-dom";

const Gnb = ({menus, changeMenu, dept}) => {
    
    return (
        <StyledGnb dept={dept}>
            {menus.map(menu => (
                <GnbMenu
                    key={menu.id}
                    menu={menu}
                    changeMenu={changeMenu}
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
    max-width: 26.2rem;
    min-height: 10.2rem;
    margin: 0;
    padding: 0;
    
    ${({dept}) => css`
        width: calc(100% / ${dept});
    `}
`;