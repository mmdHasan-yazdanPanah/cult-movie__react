import React, { useState } from 'react';

const Collapse = props => {
    const [collapse, setCollapse] = useState(false);

    const show = () => {
        setCollapse(!collapse);
    };
    return (
        <div className="collapse">
            <div
                className={`collapse__button ${
                    collapse ? 'collapse__button--show' : null
                }`}
                onClick={show}
            >
                {props.title}
            </div>
            <div
                className={`collapse__content ${
                    collapse
                        ? 'collapse__content--show'
                        : 'collapse__content--hide'
                }`}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Collapse;
