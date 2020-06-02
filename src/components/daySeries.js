import React from 'react';

import icons from '../Images/icons.svg';

const daySeries = props => {
    return (
        <section className="day-series">
            <div className="day-series__header">
                <h3 className="heading-3">سریال های امروز</h3>
                <svg className="day-series__icon">
                    <use xlinkHref={`${icons}#icon-calendar`}></use>
                </svg>
            </div>
            <ul className="day-series__images-list">
                {Object.keys(props.series).map(serie => {
                    return (
                        <li key={serie}>
                            <a href="/">
                                <figure className="day-series__item">
                                    <img
                                        src={props.series[serie]['img']}
                                        className="day-series__img"
                                    />
                                    <figcaption className="day-series__img-info">
                                        {props.series[serie]['info']}
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default daySeries;
