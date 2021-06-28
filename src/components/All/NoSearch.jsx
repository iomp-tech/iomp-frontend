import React from "react";

const NoSearch = React.memo(({style}) => {
    return (
        <div className="no-search-wrapper" style={style && style}>
            <p className="no-search-text">
                По вашему запросу ничего не найдено
            </p>
        </div>
    );
});

export default NoSearch;
