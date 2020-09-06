import React, {useEffect, useState} from "react";
import PortfolioImg from "../../components/portfolio/PortfolioImg";
import DetailImages from "../../components/portfolio/DetailImages";

const PortfolioImgContainer = ({info, images}) => {

    const count = images.length;
    const [clientWidth, setClientWidth] = useState(null);

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectImage, setSelectImage] = useState(null);

    useEffect(() => {
        const portfolioCol = document.querySelector(".portfolio-col");
        const portfolioWidth = portfolioCol.clientWidth;
        if (count === 2) {
            setClientWidth(portfolioWidth / 2);
        } else if (count >= 5) {
            setClientWidth(portfolioWidth * 0.8333);
        } else {
            setClientWidth(portfolioWidth);
        }
    }, []);

    const openImage = (i) => {
        setSelectImage(i);
        setVisiblePopup(true);
    };

    const closeEvent = () => {
        setVisiblePopup(false);
    };

    return (
        <>
            <PortfolioImg images={images} width={clientWidth} count={count} openImage={openImage}/>
            {visiblePopup &&
            <DetailImages visible={visiblePopup} info={info} images={images} selectImage={selectImage}
                          closeEvent={closeEvent}/>}
        </>
    );
};

export default PortfolioImgContainer;