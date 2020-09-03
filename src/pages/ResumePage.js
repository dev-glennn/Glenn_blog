import React from "react";
import History from "../components/resume/History";

const ResumePage = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="col">
                    <h2 className="font-lg">히스토리</h2>
                    <History/>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;