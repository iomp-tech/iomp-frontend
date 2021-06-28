import React from 'react'
import ContentLoader from "react-content-loader";

const BtnLoaded = ({color}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "20px",
                alignItems: "center",
            }}
        >
            <ContentLoader
                title="Загрузка"
                viewBox="0 0 400 160"
                height={62}
                width={120}
                backgroundColor={color !== "gray" ? "#F3F3FD" : "#D0D0D0"}
                foregroundColor={color !== "gray" ? "#8E8DDC" : "#B0B0B0"}
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </div>
    );
};

export default BtnLoaded
