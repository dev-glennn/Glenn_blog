import React from "react";
import styled from "styled-components";

const socialAddress = [
    {'gitHub': 'https://github.com/dev-glennn'},
    {'blog': 'https://blog.naver.com/qwqqq12'},
    {'velog': 'https://velog.io/@dev_glennn'}
]

const Social = () => {
    return (
        <StyledSocial>
            {socialAddress.map((item, index) => {
                const name = Object.keys(item)[0];
                const link = Object.values(item)[0];
                return <a key={index} target="_blank"
                          href={link}><img src={"/resume/" + name.toLowerCase() + ".svg"} alt={name}/></a>
            })}
        </StyledSocial>
    );
};

export default Social;

const StyledSocial = styled.div`
    >a {
        display: inline-block;
        color: #A7AABD;
        opacity: .3;
        transition: 500ms all;
        margin-right: 1.42rem;
        width: 3rem;
        height: 3rem;

        >img {
            width: 100%;
            height: 100%;
            vertical-align: top;
        }
    }
    >a:hover {
        color: #434656;
        opacity: 1;
    }
    >a:last-child img{
        width: 2.6rem;
        height: 2.6rem;
        margin: .2rem;
    }
`;

