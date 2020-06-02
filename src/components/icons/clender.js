import React from 'react';
import listIcon from '../../Images/icons.svg';

const iconMic = props => {
    return (
        <svg className={props.className}>
            <use xlinkHref={`${listIcon}#icon-calendar`}></use>
        </svg>
    );
};

export default iconMic;
