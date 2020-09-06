import React from 'react';
import {Route} from 'react-router-dom';

import TimelinePage from './pages/TimelinePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import Template from "./components/common/Template";


function App() {
    return (
        <>
            <Template>
                <Route component={TimelinePage} path={'/'} exact/>
                <Route component={AboutPage} path={'/about'} exact/>
                <Route component={ResumePage} path={'/resume'} exact/>
                <Route component={ResumePage} path={'/resume/:year([0-9]+)'} exact/>
                <Route component={PortfolioPage} path={'/portfolio'} exact/>
            </Template>
        </>
    );
}

export default App;
