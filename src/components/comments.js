import React, { useState } from 'react';
import icons from '../Images/icons.svg';

const Comments = props => {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);

    const validation = (event, input) => {
        if (event.target.checkValidity()) {
            if (input === 'name') {
                setName(true);
            }
            if (input === 'email') {
                setEmail(true);
            }
        } else {
            if (input === 'name') {
                setName(false);
            }
            if (input === 'email') {
                setEmail(false);
            }
        }
    };

    const label = e => {
        const label = e.target.nextElementSibling;
        const input = e.target;

        if (!label.classList.contains('input__label--active')) {
            label.classList.add('input__label--active');
        }
    };

    const offLabel = e => {
        const label = e.target.nextElementSibling;
        const input = e.target;

        if (
            label.classList.contains('input__label--active') &&
            input.value === ''
        ) {
            label.classList.remove('input__label--active');
        }
    };

    return (
        <div className="comments">
            <h3 className="heading-3 margin--bottom-md">نظرات</h3>
            <form className="comments__send">
                <div className="form-group">
                    <input
                        onFocus={label}
                        onBlur={offLabel}
                        onChange={e => validation(e, 'name')}
                        type="text"
                        className="input__text"
                        required
                        id="name"
                    />
                    <label htmlFor="name" className="input__name-label">
                        نام :
                    </label>
                </div>
                <div className="form-group">
                    <input
                        onFocus={label}
                        onBlur={offLabel}
                        onChange={e => validation(e, 'email')}
                        type="email"
                        className="input__text"
                        id="email"
                        required
                    />
                    <label htmlFor="email" className="input__name-label">
                        ایمیل :
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="type" className="textarea__label">
                        دیدگاه شما :
                    </label>
                    <textarea
                        className="textarea"
                        name="comment"
                        cols="30"
                        rows="7"
                        id="type"
                    ></textarea>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="ارسال دیدگاه"
                        className="form__button"
                        disabled={!email || !name}
                    />
                </div>
            </form>
            <div className="comments__list">
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comments__item">
                    <svg className="comments__image">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                    </svg>
                    <div className="comments__content">
                        <div className="comments__head">
                            <h4 className="heading-3">محمد رضا</h4>
                            <p className="text--color-dark"> . 4 ساعت پیش</p>
                        </div>
                        <p className="comments__main">
                            عجب فیلمی بود، به همه پیشنهاد میکنم که ببینن. مخصوصا
                            اونهایی که ژانر علمی تخلی رو دوست دارن
                        </p>

                        <div className="comments__foot text--color-dark">
                            <a href="/" className="comments__foot-item">
                                پاسخ
                            </a>
                            <a href="/" className="comments__foot-item">
                                لایک: 2
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                            <a href="/" className="comments__foot-item">
                                <svg className="comments__icon comments__icon-dislike">
                                    <use
                                        xlinkHref={`${icons}#icon-positive-vote`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
