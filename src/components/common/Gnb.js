import React from "react";
import styled, {css} from "styled-components";
import GnbMenu from './GnbMenu';

const Gnb = ({menus, changeMenu, dept}) => {

    return (
        <>
            메뉴영역
            </>
        // <StyledGnb dept={dept}>
        //     {menus.map(menu => (
        //         <GnbMenu
        //             key={menu.id}
        //             menu={menu}
        //             changeMenu={changeMenu}
        //         />
        //     ))}
        // </StyledGnb>
    );
};

export default Gnb;

const StyledGnb = styled.ul`
    position: relative;
    display: block;
    list-style: none;
    max-width: 26.2rem;
    min-height: 8.2rem;
    margin: 0;
    padding: 0;
    
    ${({dept}) => css`
        width: calc(100% / ${dept});
    `}
`;