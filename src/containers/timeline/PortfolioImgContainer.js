import React, {useRef, useEffect, useState} from "react";
import PortfolioImg from "../../components/portfolio/PortfolioImg";
import DetailImages from "../../components/portfolio/DetailImages";

const PortfolioImgContainer = ({info, images}) => {

    const count = useRef(images.length);

    const [clientWidth, setClientWidth] = useState(null);

    // 팝업
    const [visiblePopup, setVisiblePopup] = useState(false);
    // 선택한 이미지 번호
    const [selectImage, setSelectImage] = useState(null);

    // 포트폴리오 영억 Height
    useEffect(() => {
        const portfolioCol = document.querySelector(".portfolio-col");
        const portfolioWidth = portfolioCol.clientWidth;
        if (count.current === 2) {
            setClientWidth(portfolioWidth / 2);
        } else if (count.current >= 5) {
            setClientWidth(portfolioWidth * 0.8333);
        } else {
            setClientWidth(portfolioWidth);
        }
    }, [, selectImage]);

    // 팝업창 열기
    const openImage = (i) => {
        setSelectImage(i);
        setVisiblePopup(true);
    };

    // 팝업창 닫기
    const closeEvent = () => {
        setVisiblePopup(false);
    };

    return (
        <>
            <PortfolioImg images={images} width={clientWidth} count={count} openImage={openImage}/>
            {visiblePopup &&
            <DetailImages visible={visiblePopup} info={info} images={images}
                          selectImage={selectImage} closeEvent={closeEvent}/>}
        </>
    );
};

export default PortfolioImgContainer;