import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const GnbMenu = ({menu}) => {

    return (
        <StyledGnbMenu>
            <NavLink to={menu.path} activeClassName="active" exact={menu.path === '/'}>{menu.name}</NavLink>
        </StyledGnbMenu>
    );
};

export default GnbMenu;

const StyledGnbMenu = styled.li`
    display: inline-block;
    text-align: center;
    >a {
        z-index: 1;
        position: relative;
        display: inline-block;
        font-size: 1rem;
        font-weight: bold;
        color: #65676b;
        padding: 1.3rem 1.5rem;
    }
    
    >a:not(.active):hover:before {
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        content: '';
        width: 100%;
        height: 80%;
        background-color: #f2f2f2;
        border-radius: .6rem;
    }
    
    >a:not(.active):active:before {
        background-color: #e5e5e5;
    }   
            
    >a.active{
        color: #1876f2;
        border-bottom: 2px solid #1876f2;
    }
`;