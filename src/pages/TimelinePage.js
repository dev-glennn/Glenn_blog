import React from "react";
import Social from "../components/timeline/Social";
import Tags from "../components/timeline/Tags";
import Skills from "../components/timeline/Skills";
import PortfolioContainer from "../containers/timeline/PortfolioContainer";

const TimelinePage = () => {
    return (
        <div className="row">
            <div className="col-5">
                <div className="col">
                    <h2 className="font-lg">소개</h2>
                    <Social/>
                </div>
                <div className="col">
                    <h2 className="font-lg">스킬</h2>
                    <Skills/>
                </div>
                <div className="col">
                    <h2 className="font-lg">태그</h2>
                    <Tags/>
                </div>
            </div>
            <div className="col-7">
                <PortfolioContainer/>
            </div>
        </div>
    );
};

export default TimelinePage;