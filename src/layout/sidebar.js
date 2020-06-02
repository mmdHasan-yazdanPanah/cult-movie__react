import React from 'react';

import IconMic from '../components/icons/mic';
import post1IMG from '../Images/post1.jpg';
import post2IMG from '../Images/post2.jpg';
import post3IMG from '../Images/post3.jpg';
import post4IMG from '../Images/post4.jpg';
import post5IMG from '../Images/post5.jpg';
import post6IMG from '../Images/post6.jpg';
import post7IMG from '../Images/post7.jpg';
import post8IMG from '../Images/post8.jpg';
import post9IMG from '../Images/post9.jpg';
import post10IMG from '../Images/post10.jpg';
import Slider from '../components/Slider';
import RateBox from '../components/ratebox';
import rateMovie1 from '../Images/rate-movie1.jpg';
import rateMovie2 from '../Images/rate-movie2.jpg';
import rateMovie3 from '../Images/rate-movie3.jpg';
import rateMovie4 from '../Images/rate-movie4.jpg';
import rateMovie5 from '../Images/rate-movie5.jpg';
import rateSerie1 from '../Images/rate-serie1.jpg';
import rateSerie2 from '../Images/rate-serie2.png';
import rateSerie3 from '../Images/rate-serie3.jpg';
import rateSerie4 from '../Images/rate-serie4.jpg';
import rateSerie5 from '../Images/rate-serie5.png';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <div className="sidebar__dubbed-box">
                <div className="sidebar__dubbed-heading">
                    <h3 className="heading-3">دوبله فارسی</h3>
                    <IconMic className="sidebar__dubbed-icon" />
                </div>
                <Slider
                    images={[
                        post1IMG,
                        post2IMG,
                        post3IMG,
                        post4IMG,
                        post5IMG,
                        post6IMG,
                        post7IMG,
                        post8IMG,
                        post9IMG,
                        post10IMG
                    ]}
                />
            </div>
            <div className="sidebar__rate-box">
                <RateBox
                    title="متاکریتیک"
                    movies={{
                        movie1: {
                            img: rateMovie1,
                            meta: '89',
                            info: 'تماشای نریلر فیلم چاقو ها بیرون'
                        },
                        movie2: {
                            img: rateMovie2,
                            meta: '80',
                            info: 'تماشای نریلر فیلم کونگ'
                        },
                        movie3: {
                            img: rateMovie3,
                            meta: '72',
                            info: 'تماشای نریلر فیلم جوکر'
                        },
                        movie4: {
                            img: rateMovie4,
                            meta: '60',
                            info: 'تماشای نریلر فیلم جوکر'
                        },
                        movie5: {
                            img: rateMovie5,
                            meta: '58',
                            info: 'تماشای نریلر فیلم آن: بخش دوم'
                        },
                        movie6: {
                            img: rateMovie5,
                            meta: '58',
                            info: 'تماشای نریلر فیلم آن: بخش دوم'
                        }
                    }}
                    series={{
                        Serie1: {
                            img: rateSerie1,
                            meta: '85',
                            info:
                                'تماشای نریلر سریال یاقوت تاریک: دوران مقاومت: فصل اول'
                        },
                        Serie2: {
                            img: rateSerie2,
                            meta: '83',
                            info: 'تماشای نریلر سریال باورنکردنی'
                        },
                        Serie3: {
                            img: rateSerie3,
                            meta: '69',
                            info: 'تماشای نریلر سریال جاسوس'
                        },
                        Serie4: {
                            img: rateSerie4,
                            meta: '58',
                            info: 'تماشای نریلر سریال ووتانگ'
                        },
                        Serie5: {
                            img: rateSerie5,
                            meta: '58',
                            info: 'تماشای نریلر سریال آن: بخش دوم'
                        }
                    }}
                />
            </div>

            <div className="sidebar__newest-trailers">
                <RateBox
                    title="جدیدترین تریلرها"
                    movies={{
                        movie1: {
                            img: post10IMG,
                            info: 'تماشای نریلر فیلم چاقو ها بیرون'
                        },
                        movie2: {
                            img: post6IMG,
                            info: 'تماشای نریلر فیلم کونگ'
                        },
                        movie3: {
                            img: rateMovie3,
                            info: 'تماشای نریلر فیلم جوکر'
                        },
                        movie4: {
                            img: post8IMG,
                            info: 'تماشای نریلر فیلم جوکر'
                        },
                        movie5: {
                            img: post4IMG,
                            info: 'تماشای نریلر فیلم آن: بخش دوم'
                        },
                        movie6: {
                            img: rateMovie3,
                            info: 'تماشای نریلر فیلم جوکر'
                        }
                    }}
                    series={{
                        Serie1: {
                            img: rateSerie1,
                            info:
                                'تماشای نریلر سریال یاقوت تاریک: دوران مقاومت: فصل اول'
                        },
                        Serie2: {
                            img: rateSerie2,
                            info: 'تماشای نریلر سریال باورنکردنی'
                        },
                        Serie3: {
                            img: rateSerie3,
                            info: 'تماشای نریلر سریال جاسوس'
                        },
                        Serie4: {
                            img: rateSerie4,
                            info: 'تماشای نریلر سریال ووتانگ'
                        },
                        Serie5: {
                            img: rateSerie5,
                            info: 'تماشای نریلر سریال آن: بخش دوم'
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Sidebar;
