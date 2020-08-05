import React from "react";
import Header from './Header';
import Gnb from './Gnb';
import styled from "styled-components";
import SlidesBoxContainer from '../../containers/common/SlidesBoxContainer';

const Template = ({children}) => {
    return (
        <>
            <Head>
                <Header/>
                <SlidesBoxContainer>
                    <Gnb/>
                </SlidesBoxContainer>
            </Head>
            <Body>
                {children}
            </Body>
        </>
    );
};

export default Template;

const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 3.5rem 3.5rem 0;
`;

const Body = styled.div`
    display: flex;
    width: 100%;
`;