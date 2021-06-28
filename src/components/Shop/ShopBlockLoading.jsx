import React from "react";
import ContentLoader from "react-content-loader";

const ShopBlockLoading = () => {
    return (
        <ContentLoader
            title="Загрузка"
            speed={2}
            width="100%"
            height={200}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="300" />
        </ContentLoader>
    );
};

export default ShopBlockLoading;
