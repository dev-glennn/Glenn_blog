import React from 'react';
// import {Route} from 'react-router-dom';
// import Template from './components/common/Template';
// import AboutPage from "./pages/AboutPage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ResumePage from "./pages/ResumePage";
// import ContactPage from "./pages/ContactPage";

import SlidesBoxContainer from './containers/common/SlidesBoxContainer';
import Header from './components/common/Header';

function App() {
    return (
        <>
            <Header/>
            <SlidesBoxContainer/>
        </>
        // <Template>
        //     <AboutPage/>
        //     <PortfolioPage/>
        //     <ResumePage/>
        //     <ContactPage/>
        //     <Route component={AboutPage} path={['/', '/about']} exact/>
        //     <Route component={PortfolioPage} path={'/portfolio'} exact/>
        //     <Route component={ResumePage} path={'/resume'} exact/>
        //     <Route component={ContactPage} path={'/contact'} exact/>
        // </Template>
    );
}

export default App;
