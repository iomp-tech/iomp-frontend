import React from "react";
import ContentLoader from "react-content-loader";

const PreloaderPage = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "300px",
                marginBottom: "80px",
                alignItems: "center",
            }}
        >
            <ContentLoader
                title="Загрузка"
                viewBox="0 0 400 160"
                height={150}
                width={1200}
                backgroundColor="#A3A1FF"
                foregroundColor="#3A38DC"
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </div>
    );
};

export default PreloaderPage;