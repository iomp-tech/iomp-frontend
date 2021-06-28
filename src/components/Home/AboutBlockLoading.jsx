import React from "react";
import ContentLoader from "react-content-loader";

const AboutBlockLoading = () => {
    return (
        <ContentLoader
            title="Загрузка"
            speed={2}
            width="100%"
            height="100%"
            viewBox={`0 0 400 400`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            style={{borderRadius: "50%"}}
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>
    );
};

export default AboutBlockLoading;