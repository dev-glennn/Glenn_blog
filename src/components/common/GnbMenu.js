import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const GnbMenu = ({menu,changeMenu}) => {

    let activeId = 1;

    const activePrevId = (activeId - 1 <= 0) ? 4 : activeId - 1;
    const activeNextId = (activeId + 1 >= 5) ? 1 : activeId + 1;

    let className = '';
    if (menu.id === activeId) {
        className = 'gnb-current';
    } else if (menu.id === activePrevId) {
        className = 'gnb-prev';
    } else if (menu.id === activeNextId) {
        className = 'gnb-next';
    }

    return (
        // <StyledGnbMenu className={className}>
        <StyledGnbMenu>
            <NavLink to={menu.href}
                     data-menu={(menu.name).toLowerCase()}
                     onClick={(e) => changeMenu(e)}>{menu.name}</NavLink>
        </StyledGnbMenu>
    );
};

export default GnbMenu;

const StyledGnbMenu = styled.li`
    position: absolute;
    padding: 2.5rem;
    width: 100%;
    text-align: center;
    >a {
        font-size: 30px;
        font-style: italic;
        font-weight: bold;
        color: rgba(167, 170, 189, .5);
    }
    
    ${({className}) => {
    if (className === 'gnb-prev') {
        return css`
                left: -100%;
            `;
    } else if (className === 'gnb-current') {
        return css`
                left: 0;
                >a{
                    color: #434656;
                }
            `;
    } else if (className === 'gnb-next') {
        return css`
                left: 100%;
            `;
    } else {
        return css`
                // visibility: hidden;
            `;
    }
}}
`;