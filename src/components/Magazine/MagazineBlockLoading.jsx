import React from 'react'
import ContentLoader from "react-content-loader";

const MagazineBlockLoading = () => {
	return (
        <ContentLoader
            title="Загрузка"
            speed={2}
            width="100%"
            height={770}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="770" />
        </ContentLoader>
    );
}

export default MagazineBlockLoading
