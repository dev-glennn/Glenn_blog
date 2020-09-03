import React from "react";
import styled from "styled-components";
import {Icon} from 'react-icons-kit'
import * as icons from 'react-icons-kit/fa'

const socialAddress = [
    {
        'type': 'link',
        'path': 'https://github.com/dev-glennn',
        'icon': 'github',
    }, {
        'type': 'link',
        'path': 'https://blog.naver.com/qwqqq12',
        'icon': 'pencilSquare',
    }, {
        'type': 'link',
        'path': 'https://velog.io/@dev_glennn',
        'icon': 'vimeo',
    }, {
        'type': 'link',
        'path': 'https://open.kakao.com/o/ss3NVzkc',
        'icon': 'commenting',
    }, {
        'type': 'text',
        'path': 'dev.glennn@gmail.com',
        'icon': 'envelope',
    }
];

const Social = () => {
    return (
        <StyledSocial>
            {socialAddress.map((item, i) => {
                const {type, path, icon} = item;
                return (
                    <StyledSocialItem key={i}>
                        <Icon icon={icons[icon]}/>
                        <div className="social-link">
                            {(type === 'link') ? <a target="_blank" href={path}>{path}</a> : path}
                        </div>
                    </StyledSocialItem>
                )
            })}
        </StyledSocial>
    );
};

export default Social;

const StyledSocialItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 1.14rem;
    
    >* {
        min-height: 20px;
    }
    
    >i>svg {
        width: 20px;
        height: 20px;
        color: #8a939e;
        margin: .3rem .3rem .3rem 0;
        font-size: 1.5rem;
    }
    
    .social-link {
        padding: .3rem;
        font-size: 1rem;
    }
    
    >.social-link a{
        color: #216fdb;
    }
`;

const StyledSocial = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: -1.14rem;
`;