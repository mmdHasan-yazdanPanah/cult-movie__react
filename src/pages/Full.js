import React from 'react';

import Menu from '../layout/menu';
import Sidebar from '../layout/sidebar';
import FullPost from '../components/FullPost';
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
import GroupingMovie from '../components/grouping';
import DaySeries from '../components/daySeries';
import imgSerie1 from '../Images/day-serie1.jpg';
import imgSerie2 from '../Images/day-serie2.jpg';
import imgSerie3 from '../Images/day-serie3.jpg';
import imgSerie4 from '../Images/day-serie4.jpg';
import imgSerie5 from '../Images/day-serie5.jpg';
import imgSerie6 from '../Images/day-serie6.jpg';
import imgSerie7 from '../Images/day-serie7.jpg';

const full = props => {
    return (
        <div className="full">
            <Menu></Menu>
            <Sidebar></Sidebar>
            <main className="full-main">
                <FullPost
                    imdbId="tt5232792"
                    update="1398/6/14"
                    name="دانلود سریال Lost In Space"
                    topInfo={[
                        'دانلود سریال Lost In Space با لینک مستقیم',
                        'فصل اول قسمت دهم اضافه شد',
                        'نسخه کم حجم و با کیفیت x265 اضافه شد',
                        'کیفیت ۷۲۰p اضافه شد',
                        'کیفیت ۱۰۸۰p اضافه شد'
                    ]}
                    image={post2IMG}
                    quality="WEB-DL 1080P"
                    genres={['ترسناک', 'علمی تخیلی', 'درام', 'دلهره آور']}
                    releaseYear="(2018-)"
                    nationality="آمریکا"
                    director={{
                        name: ['Irwin Allen', 'Matt Sazama', 'Burk Sharpless'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: [
                            'Maxwell Jenkins',
                            'Molly Parker',
                            'Toby Stephens',
                            'Ignacio Serricchio'
                        ],
                        lang: 'en'
                    }}
                    summary="گمشده در فضا ، نام سریالی علمی تخیلی است که توسط آیروین آلن ، مت سازاما و بورک شارپلس ساخته است. داستان این سریال در سی سال آینده جریان دارد که استعمار فضا و کوچ کردن به یک سیاره‎ی جدید ، دیگر تبدیل به یک واقعیت انکارناپذیر شده است. حال خانواده رابینسون یکی از گروه‌هایی هستند که مورد آزمایش قرار گرفته‌اند. این خانواده از میان افراد زیادی انتخاب شدند تا یک زندگی جدید در یک دنیای بهتر و زیباتر را برای خود درست کنند. شرایط همان‎گونه که به ظاهر دیده می‌شود راحت نبوده و هنگامی که این مهاجران قصد دارند به خانه‎ی جدید خود بروند ، در میان راه دچار خطرات و مشکلات زیادی می‌شوند و…"
                />
                <div className="full-main__sidebar">
                    <DaySeries
                        series={{
                            serie1: {
                                img: imgSerie1,
                                info: 'قسمت 5 سریال بذار بیام تو اضافه شد'
                            },
                            serie2: {
                                img: imgSerie2,
                                info: 'دانلود قسمت 5 سریال The Crain'
                            },
                            serie3: {
                                img: imgSerie3,
                                info: 'دانلود قسمت 28 سریال بتمن:'
                            },
                            serie4: {
                                img: imgSerie4,
                                info: 'دانلود قسمت 42 سریال انتقام جویان'
                            },
                            serie5: {
                                img: imgSerie5,
                                info: 'دانلود قسمت 1 سریال آواتار'
                            },
                            serie6: {
                                img: imgSerie6,
                                info: 'دانلود قسمت 5 سریال بذار بیام تو'
                            },
                            serie7: {
                                img: imgSerie7,
                                info: 'دانلود قسمت 5 سریال بذار بیام تو'
                            }
                        }}
                    />
                    <div>
                        <GroupingMovie />
                        <GroupingMovie />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default full;
