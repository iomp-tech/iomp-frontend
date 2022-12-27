import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const LibraryNull = () => {
    const {size} = useSelector(({visually}) => visually);

    return (
        <div className="library-null">
            <p className={`library-null__title ${size}`}>
                К сожалению у вас нет курсов
            </p>
        </div>
    );
};

export default LibraryNull;
