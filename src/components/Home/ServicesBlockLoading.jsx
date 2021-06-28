import React from 'react';
import ContentLoader from "react-content-loader";

const ServicesBlockLoading = () => {
	return (
        <ContentLoader
            title="Загрузка"
            speed={2}
            width="100%"
            height={300}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            style={{marginBottom: "25px"}}
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="300" />
        </ContentLoader>
    );
}

export default ServicesBlockLoading;