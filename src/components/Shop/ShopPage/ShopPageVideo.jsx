import React from "react";
import YouTube from "react-youtube";

const ShopPageVideo = ({title, url}) => {
    let videoId;

    if (url) {
        const video = new URL(url);
        const videoParams = new URLSearchParams(video.search);

        videoId = videoParams.get("v");
    }

    return (
        <section className={`shop-page-video`}>
            <div className="container">
                <div className="shop-page-video-wrapper">
                    <h2
                        className="shop-page-video__title"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
					></h2>
					
                    <div className="shop-page-video-block">
                        <YouTube videoId={videoId} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageVideo;
