import React from "react";
import Template from "../components/common/Template";
import Introduce from "../components/about/Introduce";

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
                        <img src="/about/introduce.svg" className="img-sm" alt="Introduce Icon"/>
                        tags
                    </h2>
                    1
                </div>
            </div>
            <div className="row">
                2${}
            </div>
            <div className="row last-row">
                3
            </div>
        </Template>
    );
};

export default AboutPage;