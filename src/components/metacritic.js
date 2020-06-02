import React from 'react';

const metacritic = props => {
    let className;
    let number = parseInt(props.number);

    if (number <= 39) {
        className = 'meta meta--worst';
    } else if (number >= 40 && number <= 60) {
        className = 'meta meta--medium';
    } else if (number >= 61 && number <= 100) {
        className = 'meta meta--best';
    } else {
        className = 'meta meta--worng';
    }

    return (
        <div className={`${className} ${props.className}`}>{props.number}</div>
    );
};

export default metacritic;
