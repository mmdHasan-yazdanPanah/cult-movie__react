import React from 'react';

import Menu from '../layout/menu';
import Sidebar from '../layout/sidebar';
import MovieRate from '../layout/movie-rate';
import Post from '../components/Post';
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

const Home = props => {
    return (
        <div className="home">
            <Menu></Menu>
            <Sidebar></Sidebar>
            <main className="main">
                <Post
                    imdbId="tt5013056"
                    dubbed="true"
                    update="1398/6/11"
                    name="دانلود فیلم Dunkirk"
                    topInfo={[
                        'پیش نمایش فیلم اضافه شد',
                        'نسخه کم حجم و با کیفیت x265 اضافه شد',
                        'کیفیت ۴۸۰p اضافه شد',
                        'کیفیت ۱۰۸۰p اضافه شد'
                    ]}
                    image={post1IMG}
                    quality="WEB-DL 1080P"
                    genres={['ترسناک', 'علمی تخیلی', 'درام', 'دلهره آور']}
                    releaseYear="2019"
                    nationality="آمریکا"
                    director={{ name: 'Christopher Nolan', lang: 'en' }}
                    stars={{
                        stars: [
                            'Fionn Whitehead',
                            'Barry Keoghan',
                            'Mark Rylance'
                        ],
                        lang: 'en'
                    }}
                    summary="دانکرک ، فیلمی تاریخی و جنگی به کارگردانی ، نویسندگی و
                        تهیه‌کنندگی کریستوفر نولان است. داستان فیلم در جنگ جهانی
                        دوم اتفاق می‌افتد و درباره‌ی تخلیه نیروهای بریتانیا ،
                        فرانسه و بلژیک از شهر دانکرک در فرانسه می‌باشد. در جریان
                        این عملیات تاریخی بیش از ۸۰۰ قایق نظامی ارتش بریتانیا
                        جان دست‌کم ۳۳۵ هزار سرباز انگلیسی و فرانسوی را که در
                        محاصره ارتش آلمان‌ها گرفتار شده بودند ، نجات دادند و…"
                />

                <div className="main__sidebar">
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

                <Post
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

                <Post
                    imdbId="tt5323662"
                    dubbed="true"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن صدای خاموش A Silent Voice 2016"
                    topInfo={[
                        'دانلود دوبله فارسی انیمیشن صدای خاموش A Silent Voice 2016 BluRay',
                        'انیمیشن A Silent Voice 2016 با کیفیت 1080p & 720p & 480p',
                        'برنده 4 جایزه و نامزد 5 جایزه دیگر'
                    ]}
                    image={post4IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
                <Post
                    imdbId="tt0382932"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post3IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="دانش آموزی به نام “نیشیمیا شوکو” است که از اختلال شنوایی رنج می برد به یک مدرسه جدید منتقل می شود، جائیکه همکلاسی هایش مخصوصاً “ایشیدا” به او زورگویی میکنند. زمانی که “نیشیمیا” مجبور میشود دوباره به مدرسه دیگری برود، “ایشیدا” که خودش را مقصر این کار میداند دچار عذاب وجدان می شود و…"
                />
                <Post
                    imdbId="tt6644200"
                    update="1398/6/14"
                    name="دانلود فیلم A Quiet Place 2018 با دوبله فارسی"
                    topInfo={[
                        'دانلود با لینک مستقیم و کیفیت های 480p BluRay ,720p BluRay ,1080p BluRay',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p',
                        'دوبله فارسی فیلم A Quiet Place مکانی آرام  سال 2018'
                    ]}
                    image={post5IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="اعضای خانواده‌ای که از رویدادهای آخرالزمانی جان سالم به در برده‌اند ناچار هستند تا با زبان اشاره با یکدیگر صحبت کنند، چرا که هیولاهایی با قدرت شنوایی بالا در نزدیکی آنها وجود دارند. فیلم در آینده رخ می‌دهد و دورانی را به تصویر می‌کشد که هیولاهایی ناشناخته زمین را به تسخیر خود درآورده‌اند و کوچک‌ترین صدایی می‌تواند آنان را به سوی انسان کشانده و سبب نابودی شان شود…"
                />
                <Post
                    imdbId="tt0185906"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post7IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
                <Post
                    imdbId="tt0185906"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post8IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
                <Post
                    imdbId="tt2582802"
                    dubbed="true"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post9IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
                <Post
                    imdbId="tt0482571"
                    dubbed="true"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post10IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
                <Post
                    imdbId="tt3659388"
                    dubbed="true"
                    update="1398/6/14"
                    name="دانلود دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007"
                    topInfo={[
                        'دانلود رایگان دوبله فارسی انیمیشن موش سرآشپز Ratatouille 2007',
                        'با لینک مستقیم و دو کیفیت BluRay 1080p + BluRay 720p'
                    ]}
                    image={post6IMG}
                    quality="BLUERAY FULL HD"
                    genres={['انیمیشن', 'کمدی', 'خانوادگی']}
                    releaseYear="2007"
                    nationality="آمریکا"
                    director={{
                        name: ['Brad Bird', 'Jan Pinkava'],
                        lang: 'en'
                    }}
                    stars={{
                        stars: ['Brad Garrett', 'Lou Romano', 'Patton Oswalt'],
                        lang: 'en'
                    }}
                    summary="رمی موشی شهرستانی عاشق آشپزی است و الگوی او گوستو، سرآشپز یکی از معروف ترین رستوران های پاریس. روزی رمی از مرگ گوستو باخبر می شود و اتفاقی به پاریس می رسد. پس از چندی نیز در رستوران گوستو که حالا رونق خود را از دست داده، مخفیانه مشغول به کار آشپزی می شود…"
                />
            </main>
        </div>
    );
};

export default Home;
