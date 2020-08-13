import React from 'react';

import Header from './components/common/Header';
import SlideBoxContainer from './containers/common/SlideBoxContainer';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <>
            <Header/>
            <SlideBoxContainer>
                <AboutPage name={'About'} path={'/about'}/>
                <ResumePage name={'Resume'} path={'/resume'}/>
                <PortfolioPage name={'Portfolio'} path={'/portfolio'}/>
                <ContactPage name={'Contact'} path={'/contact'}/>
            </SlideBoxContainer>
        </>
    );
}

export default App;
