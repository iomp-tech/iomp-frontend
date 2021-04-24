import React from "react";
import moment from "moment";
import "moment/locale/ru";

const PostItem = React.memo(
    ({
        date,
        title,
        smallDescription,
        thumb,
        block,
        auths,
        auth,
        categories,
        postsType,
        size,
    }) => {
        return (
            <div className="post-wrapper">
                <div className="post-cover">
                    <div className={`post-cover-text ${size}`}>
                        <div className="post-cover-block-top">
                            <span className={`post-cover__date ${size}`}>
                                {moment(date, "YYYY-MM-DD, HH:mm")
                                    .locale("ru")
                                    .format("DD MMMM, HH:mm")}
                            </span>
                            <div className="post-cover-types">
                                <span
                                    className={`post-cover__type_color ${size}`}
                                >
                                    {categories && categories.title}
                                </span>
                                <span
                                    className={`post-cover__type_gray ${size}`}
                                >
                                    {postsType && postsType.title}
                                </span>
                            </div>
                        </div>
                        <h2 className={`post-cover__title ${size}`}>{title}</h2>
                        <p className={`post-cover__description ${size}`}>
                            {smallDescription}
                        </p>
                        <div className="post-cover-auth-wrapper">
                            {Object.keys(auths).length &&
                                auth &&
                                auth.map((key) => (
                                    <div
                                        className="auth post-cover-auth"
                                        key={`auht-post-${auths[key].id}`}
                                    >
                                        <div
                                            style={{
                                                backgroundImage: `url(${auths[key].avatar})`,
                                            }}
                                            className={`auth__img ${size} post-cover-auth__img`}
                                        ></div>
                                        <span
                                            className={`auth__name ${size} post-cover-auth__name`}
                                        >
                                            {auths[key].name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div
                        className={`post-cover-thumb ${size}`}
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    ></div>
                </div>

                {block &&
                    block.map((obj, index) => (
                        <div
                            className="post-block"
                            key={`${obj.title}_${index}`}
                        >
                            <h3 className={`post-block__title ${size}`}>
                                {obj.title}
                            </h3>
                            <div
                                className={`post-block__description ${size}`}
                                dangerouslySetInnerHTML={{__html: obj.body}}
                            ></div>

                            {obj.thumbBlock && (
                                <div
                                    className="post-block-thumb"
                                    style={{
                                        backgroundImage: `url(${obj.thumbBlock})`,
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
            </div>
        );
    }
);

export default PostItem;
