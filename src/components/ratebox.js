import React, { useState } from 'react';

import Metacritic from './metacritic';

const RateBox = props => {
    const [rateBox, setRateBox] = useState('movies');

    const toMovies = () => {
        setRateBox('movies');
    };

    const toSeries = () => {
        setRateBox('series');
    };

    let rate;

    if (rateBox === 'movies') {
        rate = (
            <div className="rate-box__movies">
                {Object.keys(props.movies).map(movie => {
                    return (
                        <a href="/" className="rate-box__item" key={movie}>
                            <figure className="rate-box__image-box">
                                <img
                                    alt={movie}
                                    className="rate-box__image"
                                    src={props.movies[movie]['img']}
                                />
                                <figcaption className="rate-box__image-info">
                                    {props.movies[movie]['info']}
                                </figcaption>
                                {props.movies[movie]['meta'] ? (
                                    <Metacritic
                                        number={props.movies[movie]['meta']}
                                        className="rate-box__meta"
                                    />
                                ) : null}
                            </figure>
                        </a>
                    );
                })}
            </div>
        );
    } else if (rateBox === 'series') {
        rate = (
            <div className="rate-box__series">
                {Object.keys(props.series).map(serie => {
                    return (
                        <a href="/" className="rate-box__item" key={serie}>
                            <figure className="rate-box__image-box">
                                <img
                                    alt={serie}
                                    className="rate-box__image"
                                    src={props.series[serie]['img']}
                                />
                                <figcaption className="rate-box__image-info">
                                    {props.series[serie]['info']}
                                </figcaption>
                                {props.series[serie]['meta'] ? (
                                    <Metacritic
                                        number={props.series[serie]['meta']}
                                        className="rate-box__meta"
                                    />
                                ) : null}
                            </figure>
                        </a>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="rate-box">
            <div className="rate-box__header">
                <h3 className="heading-3 text--color-light margin--bottom-md">
                    {props.title}
                </h3>
                <div className="rate-box__buttons">
                    <button
                        onClick={toMovies}
                        className="rate-box__button"
                        disabled={rateBox === 'movies' ? true : false}
                    >
                        فیلم ها
                    </button>

                    <button
                        onClick={toSeries}
                        className="rate-box__button"
                        disabled={rateBox === 'series' ? true : false}
                    >
                        سریال ها
                    </button>
                </div>
            </div>
            {rate}
        </div>
    );
};

export default RateBox;
