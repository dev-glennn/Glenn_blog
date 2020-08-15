import React from "react";
import Template from "../components/common/Template";
import History from "../components/resume/History";
import Skills from "../components/resume/Skills";
import Social from "../components/resume/Social";

const ResumePage = () => {
    return (
        <Template>
            <div className="row">
                <div className="col-6">
                    <h2><img src="/resume/history.png" alt="History Icon"/>History</h2>
                    <History/>
                </div>
                <div className="col-6">
                    <div className="col-12">
                        <h2><img src="/resume/skill.png" alt="Development Skills Icon"/>Development Skills</h2>
                        <Skills/>
                    </div>
                    <div className="col-12">
                        <h2><img src="/resume/social.png" alt="Social Site"/>Social Site</h2>
                        <Social/>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default ResumePage;