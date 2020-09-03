import React from "react";
import Introduce from "../components/about/Introduce";
import Language from "../components/about/Language";

const AboutPage = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="col">
                    <h2 className="font-lg">정보</h2>
                    <Introduce/>
                </div>
                <div className="col">
                    <h2 className="font-lg">프론트엔드</h2>
                    <Language type="front"/>
                </div>
                <div className="col">
                    <h2 className="font-lg">백엔드</h2>
                    <Language type="back"/>
                </div>
                <div className="col">
                    <h2 className="font-lg">데이터베이스 & 호스팅</h2>
                    <Language type="database"/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;