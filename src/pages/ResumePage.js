import React from "react";
import HistoryContainer from "../containers/resume/HistoryContainer";

const ResumePage = ({match}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="col">

                    <HistoryContainer match={match}/>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;