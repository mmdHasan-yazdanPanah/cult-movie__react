import React, { useState, useEffect } from 'react';

import logo from '../Images/logo.png';

const Menu = props => {
    const [fixed, setFixed] = useState(false);
    const [moveUp, setMoveUp] = useState(false);
    const [opacity, setOpacity] = useState(false);

    window.onclick = event => {
        if (!event.defaultPrevented) {
            hideMenu();
        }
    };

    const hideMenu = () => {
        if (document.querySelector('.menu__sub--show')) {
            document
                .querySelector('.menu__sub--show')
                .classList.remove('menu__sub--show');
        }
    };

    const underlineChange = (e, nth) => {
        e.preventDefault();
        const underlines = document.getElementsByClassName('menu__underline');
        for (let i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = `translateX(${nth * -100}%)`;
        }

        if (e.target.classList.contains('menu__item')) {
            if (e.target.children.length > 0) {
                if (
                    e.target.children[0].classList.contains('menu__sub--show')
                ) {
                    document
                        .querySelector('.menu__sub--show')
                        .classList.remove('menu__sub--show');
                } else {
                    hideMenu();
                    e.target.children[0].classList.add('menu__sub--show');
                }
            } else {
                hideMenu();
            }
        }
    };

    document.addEventListener('scroll', () => {
        hideMenu();

        if (window.pageYOffset <= 860 && window.pageYOffset >= 400) {
            setMoveUp(true);
        }
        if (window.pageYOffset >= 960) {
            setMoveUp(false);
            setOpacity(false);
            setFixed(true);
        }
        if (window.pageYOffset < 400) {
            setFixed(false);
            setOpacity(true);
        }
    });

    return (
        <div
            className={`menu ${moveUp ? 'menu--fixed-false' : ''} ${
                fixed ? 'menu--fixed-true' : ''
            } ${opacity ? 'menu--show' : ''}`}
        >
            <nav className="menu__list" id="menu">
                <div className="menu__underline"></div>
                <div className="menu__underline"></div>
                <div className="menu__underline"></div>
                <div
                    onClick={e => underlineChange(e, 0)}
                    className="menu__item"
                >
                    خانه
                </div>
                <div
                    onClick={e => underlineChange(e, 1)}
                    className="menu__item menu__icon-arrow"
                >
                    فیلم
                    <div className="menu__sub">
                        <div className="menu__sub-group">
                            <h3 className="heading-5 text--color-primary-light text--right">
                                فیلم ها :
                            </h3>
                            <ul className="menu__sub-list">
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        همه فیلم ها
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        عناوین برتر آینده
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        فیلم های برتر کاربران
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        جدول باکس آفیس
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__sub-group">
                            <h3 className="heading-5 text--color-primary-light text--right">
                                ویژه ها :
                            </h3>
                            <ul className="menu__sub-list">
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        250 فیلم برتر تاریخ
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        فیلم های برتر منتقدین
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        فیلم های برتر قرن 21
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        برترین فیلم های اسکار
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__sub-group">
                            <h3 className="heading-5 text--right text--color-primary-light">
                                جوایز :
                            </h3>
                            <ul className="menu__sub-list">
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        لیست کاندیدا ها
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        لیست جوایز اسکار
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        آرشیو گلدن گلوب
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__sub-group">
                            <h3 className="heading-5 text--right text--color-primary-light">
                                برترین ها :
                            </h3>
                            <ul className="menu__sub-list">
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        برترین های 2019
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        برترین های 2018
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        برترین های 2017
                                    </a>
                                </li>
                                <li className="menu__sub-item">
                                    <a href="/" className="menu__sub-link">
                                        برترین های 2016
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    onClick={e => underlineChange(e, 2)}
                    className="menu__item"
                >
                    سریال
                </div>
                <div
                    onClick={e => underlineChange(e, 3)}
                    className="menu__item"
                >
                    هنرمندان
                </div>
                <div
                    onClick={e => underlineChange(e, 4)}
                    className="menu__item"
                >
                    تریلر ها
                </div>
                <div
                    onClick={e => underlineChange(e, 5)}
                    className="menu__item"
                >
                    تماس با ما
                </div>
                <div
                    onClick={e => underlineChange(e, 6)}
                    className="menu__item"
                >
                    تبلیغات
                </div>
            </nav>
        </div>
    );
};

export default Menu;
