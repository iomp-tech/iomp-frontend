import React from "react";
import ContentLoader from "react-content-loader";

const TimetableBlockLoading = () => {
    return (
        <ContentLoader
            title="Загрузка"
            speed={2}
            width="98%"
            height={350}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>
    );
};

export default TimetableBlockLoading;
