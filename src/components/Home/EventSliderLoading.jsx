import React from "react";
import ContentLoader from "react-content-loader";

const EventSliderLoading = () => {
    return (
        <ContentLoader
            title="Загрузка"
            height={500}
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
            <rect x="20" y="40" rx="3" ry="3" width="20%" height="20" />
            <rect x="20" y="80" rx="3" ry="3" width="50%" height="20" />
            <rect x="0" y="120" rx="3" ry="3" width="100%" height="20" />
            <rect x="20" y="160" rx="3" ry="3" width="90%" height="20" />
            <rect x="20" y="200" rx="3" ry="3" width="20%" height="20" />
            <rect x="0" y="240" rx="3" ry="3" width="100%" height="20" />
            <rect x="20" y="280" rx="3" ry="3" width="20%" height="20" />
            <rect x="20" y="320" rx="3" ry="3" width="50%" height="20" />
            <rect x="0" y="360" rx="3" ry="3" width="100%" height="20" />
            <rect x="20" y="400" rx="3" ry="3" width="90%" height="20" />
            <rect x="20" y="440" rx="3" ry="3" width="20%" height="20" />
        </ContentLoader>
    );
};

export default EventSliderLoading;
