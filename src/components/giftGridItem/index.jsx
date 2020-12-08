import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css'

export const GiftGridItem = (props) => {

    const {url, title} = props;

    return(
        <div className={style.flex_item}>
            <img className={style.image} src={url} alt={title}/>
            <p className={style.title}>{title}</p>
        </div>
    )
}

GiftGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}