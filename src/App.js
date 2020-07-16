import React from 'react';
import {Route} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <>
          <Route component={AboutPage} path={['/','/about']} exact/>
          <Route component={PortfolioPage} path={'/portfolio'} exact/>
          <Route component={ResumePage} path={'/resume'} exact/>
          <Route component={ContactPage} path={'/contact'} exact/>
        </>
    );
}

export default App;
