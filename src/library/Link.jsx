import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = ({ children, url, ...rest }) => {
    if (typeof url === "undefined") {
        url = "";
    }
    return (
        <ReactLink
            to={{
                pathname: url,
                state: {
                    prevPath: window.location.pathname
                        ? window.location.pathname
                        : "/"
                }
            }}
            {...rest}
        >
            {children}
        </ReactLink>
    );
};

export default Link;
