import React from "react";
import styled from "styled-components";
import GnbMenu from './GnbMenu';

const Gnb = ({menus}) => {

    return (
        <StyledGnb className="sm-width">
            {
                menus.map((menu, i) => (
                    <GnbMenu
                        key={i}
                        menu={menu}
                    />
                ))}
        </StyledGnb>
    );
};

export default Gnb;

const StyledGnb = styled.ul`
    position: relative;
    display: flex;
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;
`;