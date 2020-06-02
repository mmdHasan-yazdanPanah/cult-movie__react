import React, { useEffect, useState } from 'react';
import axios from 'axios';

import listIcon from '../Images/icons.svg';
import Button from './button';
import commentIcon from '../Images/SVG/chat.svg';
import eyeIcon from '../Images/SVG/eye.svg';
import IconMic from './icons/mic';
import IconClender from './icons/clender';
import Colapse from './collapse';
import Comments from './comments';

const FullPost = props => {
    const [filmData, setFilmData] = useState(null);
    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?i=${props.imdbId}&apikey=f1baaddd`)
            .then(res => {
                setFilmData(res.data);
            });
        // .catch(err => console.log(err));
    }, [props.imdbId]);

    return (
        <div className="post">
            <div className="post__info-top">
                {props.dubbed ? (
                    <div className="post__dubbed">
                        دوبله فارسی
                        <IconMic className="post__icon-mic" />
                    </div>
                ) : null}

                <a href="/" className="post__comments-num">
                    <img
                        src={commentIcon}
                        alt="comment icon"
                        className="post__icon-comment"
                    />
                    297 نظر
                </a>

                <a href="/" className="post__comments-num">
                    <img
                        src={eyeIcon}
                        alt="eye icon"
                        className="post__icon-comment"
                    />
                    1156 بازدید
                </a>

                <div className="post__rate-box" lang="en">
                    <div className="icons__imdb">IMDB</div>
                    <div className="post__imdb-rate">
                        <svg className="post__icon-star">
                            <use xlinkHref={`${listIcon}#icon-star`}></use>
                        </svg>
                        <span>
                            {filmData ? filmData.imdbRating : 'بارگذاری ...'}/10
                        </span>
                    </div>
                </div>
            </div>
            <div className="post__main">
                <div className="post__header flex flex--column flex--justify-between align-items--center">
                    <div className="post__date-created-box flex--align-self-stretch">
                        <svg className="post__icon">
                            <use xlinkHref={`${listIcon}#icon-update`}></use>
                        </svg>
                        <span className="post__main-text--light">
                            آخرین تاریخ آپدیت:
                        </span>
                        {props.update}
                    </div>
                    <h3 className="heading-3 post__name text--center">
                        {props.name}
                    </h3>
                </div>
                <div className="flex flex--column flex--justify-evenly">
                    {props.topInfo.map(info => {
                        return (
                            <p
                                className="text--color-secondary text--center"
                                key={info}
                            >
                                {info}
                            </p>
                        );
                    })}
                </div>

                <div className="post__img-container">
                    <img
                        src={props.image}
                        alt="Post img"
                        className="post__img"
                    />
                </div>
                <ul className="post__info flex flex--column flex--justify-between">
                    <li className="text--med align-items--center">
                        <span className="text--color-dark">کیفیت:</span>{' '}
                        <span
                            className="text--color-primary margin--right-sm text--english text--bold text--uppercase"
                            lang="en"
                        >
                            {props.quality}
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-genre">
                            <use
                                xlinkHref={`${listIcon}#icon-theater-mask`}
                            ></use>
                        </svg>
                        <span className="text--color-dark">ژانر:</span>{' '}
                        <span className="text--color-primary margin--right-sm">
                            {props.genres.map(genre => (
                                <a href="/" className="link" key={genre}>
                                    {genre}
                                </a>
                            ))}
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <IconClender className="post__icon-calendar" />
                        <span className="text--color-dark">
                            سال انتشار:
                        </span>{' '}
                        <span
                            className="text--color-primary margin--right-sm text--english"
                            lang="en"
                        >
                            <a href="/" className="link">
                                {props.releaseYear}
                            </a>
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-star-outline">
                            <use
                                xlinkHref={`${listIcon}#icon-star_outline`}
                            ></use>
                        </svg>
                        <span className="text--color-dark">نمره منتقدین:</span>{' '}
                        <span
                            className="text--color-primary margin--right-sm text--english"
                            lang="en"
                        >
                            {filmData
                                ? filmData.Metascore !== 'N/A'
                                    ? filmData.Metascore + '/100'
                                    : '--'
                                : 'بارگذاری ...'}
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-positive-vote">
                            <use
                                xlinkHref={`${listIcon}#icon-positive-vote`}
                            ></use>
                        </svg>
                        <span className="text--color-dark">میزان آرا:</span>{' '}
                        <span className="text--color-primary margin--right-sm">
                            <span className="text--english" lang="en">
                                {filmData ? filmData.imdbVotes : 'بارگذاری ...'}{' '}
                            </span>
                            نفر
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-map">
                            <use xlinkHref={`${listIcon}#icon-map`}></use>
                        </svg>
                        <span className="text--color-dark">محصول کشور:</span>{' '}
                        <span className="text--color-primary margin--right-sm">
                            <a href="/" className="link">
                                {props.nationality}
                            </a>
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-director-chair">
                            <use
                                xlinkHref={`${listIcon}#icon-director-chair`}
                            ></use>
                        </svg>
                        <span className="text--color-dark">کارگردان:</span>{' '}
                        <span
                            className="text--color-primary margin--right-sm text--english"
                            lang={props.director.lang}
                        >
                            {Array.isArray(props.director.name) ? (
                                props.director.name.map(n => (
                                    <a href="/" className="link" key={n}>
                                        {n}
                                    </a>
                                ))
                            ) : (
                                <a href="/" className="link">
                                    {props.director.name}
                                </a>
                            )}
                        </span>
                    </li>

                    <li className="text--med align-items--center">
                        <svg className="post__icon-stars">
                            <use xlinkHref={`${listIcon}#icon-stars`}></use>
                        </svg>
                        <span className="text--color-dark">ستارگان:</span>{' '}
                        <span
                            className="text--color-primary margin--right-sm text--english"
                            lang={props.stars.lang}
                        >
                            {Array.isArray(props.stars.stars) ? (
                                props.stars.stars.map(star => (
                                    <a href="/" className="link" key={star}>
                                        {star}
                                    </a>
                                ))
                            ) : (
                                <a href="/" className="link">
                                    {props.stars.stars}
                                </a>
                            )}
                        </span>
                    </li>
                </ul>

                <div className="post__story">
                    <p>خلاصه :</p>
                    <p>{props.summary}</p>
                </div>
                <div className="post__downlaod">
                    <Colapse title="دانلود دوبله فارسی">
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-danger margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-danger margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                    </Colapse>
                    <Colapse title="دانلود نسخه زیرنویس فارسی">
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-success margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-danger margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-danger margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                        <div className="download">
                            <h4 className="heading-4 text--color-wrong margin--botom-md">
                                دانلود با کیفیت BluRay 720p
                            </h4>
                            <span className="download__link text--color-dark">
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                            <span className="download__link text--color-dark">
                                دانلود صوت دوبله فارسی به صورت جداگانه:
                                <a
                                    href="/"
                                    className="link text--color-secondary"
                                >
                                    لینک مستقیم
                                </a>
                            </span>
                        </div>
                    </Colapse>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default FullPost;
