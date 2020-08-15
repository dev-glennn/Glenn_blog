import React from "react";
import Template from "../components/common/Template";
import Introduce from "../components/about/Introduce";
import Tags from "../components/about/Tags";
import Language from "../components/about/Language";

const AboutPage = () => {
    return (
        <Template>
            <div className="row">
                <div className="col-7">
                    <h2>
                        <img src="/about/introduce.svg" className="img-sm" alt="Introduce Icon"/>
                        introduce
                    </h2>
                    <Introduce/>
                </div>
                <div className="col-5">
                    <h2>
                        <img src="/about/tag.svg" className="img-sm" alt="Tags Icon"/>
                        tags
                    </h2>
                    <Tags/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>Front - End</h2>
                    <Language type="front"/>
                </div>
                <div className="col-6">
                    <h2>Back - End</h2>
                    <Language type="back"/>
                </div>
            </div>
            <div className="row last-row">
                <div className="col-12">
                    <h2>Database & Hosting Service</h2>
                    <Language type="database"/>
                </div>
            </div>
        </Template>
    );
};

export default AboutPage;