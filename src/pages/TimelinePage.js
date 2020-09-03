import React from "react";
import Introduce from "../components/about/Introduce";
import Tags from "../components/about/Tags";
import Language from "../components/about/Language";

const TimelinePage = () => {
    return (
        <div className="row">
            <div className="col-5">
                <div className="col">
                    <h2 className="font-lg">
                        소개
                    </h2>
                </div>
                <div className="col">
                    <h2 className="font-lg">
                        태그
                    </h2>
                </div>
            </div>
            <div className="col-7">
                <div className="col">
                    게시글 1
                </div>
                <div className="col">
                    게시글 2
                </div>
                <div className="col">
                    게시글 3
                </div>
                <div className="col">
                    게시글 1
                </div>
                <div className="col">
                    게시글 2
                </div>
                <div className="col">
                    게시글 3
                </div>
                <div className="col">
                    게시글 1
                </div>
                <div className="col">
                    게시글 2
                </div>
                <div className="col">
                    게시글 3
                </div>
                <div className="col">
                    게시글 1
                </div>
                <div className="col">
                    게시글 2
                </div>
                <div className="col">
                    게시글 3
                </div>

            </div>
        </div>
    );
};

export default TimelinePage;