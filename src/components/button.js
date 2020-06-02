import React from 'react';
import { Link } from 'react-router-dom';

const button = props => {
    let button;
    if (props.type === 'border-bottom') {
        button = (
            <React.Fragment>
                <Link
                    to="/full"
                    className={`button button--outline ${props.className}`}
                >
                    <svg className="button button__arrow button__arrow--left">
                        <use xlinkHref="#arrow"></use>
                    </svg>

                    <span className="button__label--type1">
                        {props.children}
                    </span>

                    <svg className="button button__arrow button__arrow--right">
                        <use xlinkHref="#arrow"></use>
                    </svg>
                </Link>
                <svg style={{ display: 'none' }}>
                    <defs>
                        <symbol id="arrow" viewBox="0 0 35 15">
                            <title>Arrow</title>
                            <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z " />
                        </symbol>
                    </defs>
                </svg>
            </React.Fragment>
        );
    }

    if (props.type === 'simple') {
        return (
            <input
                type="button"
                value={props.children}
                className="button__simple"
            />
        );
    }

    return button;
};

export default button;
