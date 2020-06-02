import React, { useState, useEffect } from 'react';

const Slider = props => {
    // IN THIS SLIDER YOU CAN JUST USE 10 IMAGE

    const [moved, setMoved] = useState(false);

    useEffect(() => {
        const automoveFunc = () => {
            if (slider.scrollLeft < 446) {
                let speed = 6;
                const after = setInterval(() => {
                    slider.scrollLeft += speed;
                    speed -= 0.1;
                }, 9);
                setTimeout(() => {
                    clearInterval(after);
                }, 540);
            } else {
                let speed = 8;
                const after = setInterval(() => {
                    slider.scrollLeft -= speed;
                    speed -= 0.01;
                }, 1);
                setTimeout(() => {
                    clearInterval(after);
                }, 800);
            }
        };

        let slider = document.querySelector('.sidebar__dubbed-images');
        let start;
        let clicked;
        let scrollleft;
        let movement;
        let autoMove = setInterval(automoveFunc, 5000);

        slider.addEventListener('mousedown', e => {
            e.preventDefault();
            setMoved(false);
            slider.classList.add('sidebar__slider--active');
            clicked = true;
            start = e.clientX - slider.offsetLeft;
            scrollleft = slider.scrollLeft;
            clearInterval(autoMove);
        });

        slider.addEventListener('mouseup', e => {
            e.preventDefault();
            clicked = false;
            let speed = 1.5;
            const after = setInterval(() => {
                slider.scrollLeft += -speed * movement;
                speed -= 0.1;
            }, 20);
            setTimeout(() => {
                slider.classList.remove('sidebar__slider--active');
                clearInterval(after);
            }, 300);
            clearInterval(autoMove);
            slider.classList.remove('sidebar__over-slide-left');
            slider.classList.remove('sidebar__over-slide-right');
            autoMove = setInterval(automoveFunc, 5000);
        });

        slider.addEventListener('mouseleave', () => {
            clearInterval(autoMove);
            autoMove = setInterval(automoveFunc, 5000);
            clicked = false;
            slider.classList.remove('sidebar__over-slide-left');
            slider.classList.remove('sidebar__over-slide-right');
        });

        slider.addEventListener('mousemove', e => {
            e.preventDefault();
            if (clicked) {
                console.log(slider.scrollLeft);
                const x = e.clientX - slider.offsetLeft;
                const move = (x - start) * 1.5;
                slider.scrollLeft = scrollleft - move;
                movement = e.movementX;
                if (slider.scrollLeft >= 440 && movement < 0) {
                    slider.classList.add('sidebar__over-slide-right');
                } else {
                    slider.classList.remove('sidebar__over-slide-right');
                }
                if (slider.scrollLeft === 0 && movement > 0) {
                    slider.classList.add('sidebar__over-slide-left');
                } else {
                    slider.classList.remove('sidebar__over-slide-left');
                }

                setMoved(true);
            } else {
                return;
            }
        });
    }, []);

    const preventDefault = e => {
        if (moved) {
            e.preventDefault();
        }
    };

    return (
        <div className="sidebar__dubbed-images">
            {props.images.map(image => {
                return (
                    <a
                        key={image}
                        href="/"
                        className="sidebar__dubbed-img"
                        onClick={preventDefault}
                    >
                        <img
                            src={image}
                            alt={`sidebar deubbed ${props.images.indexOf(
                                image
                            )}`}
                        />
                    </a>
                );
            })}
        </div>
    );
};

export default Slider;
