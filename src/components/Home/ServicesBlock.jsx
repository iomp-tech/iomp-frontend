import React from "react";

const ServicesBlock = ({title, description, index, type, size}) => {
    return (
        <div className={`services-block ${size} services-block_${type}`}>
            <span className={`services-block__number ${size}`}>{index}.</span>
            {title && (
                <h3 className={`services-block__title ${size}`}>{title}</h3>
            )}
            {description && (
                <p
                    className={`services-block__description ${size}`}
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}></p>
            )}
        </div>
    );
};

export default ServicesBlock;
