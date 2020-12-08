import React from 'react'
import PropTypes from 'prop-types';
import useFetchGifts from '../../hooks/useFetchGifts'
import { GiftGridItem } from '../giftGridItem';

import style from './style.module.css'

export const GiftGrid = (props) => {

    const { category } = props;

    const { data:images, loading } = useFetchGifts(category);
    
    return(
        <div className={style.flex_wrap}>
            {loading && <p>loading...</p>}
            <h3 className={style.title}>{category}</h3>
            {images.map(image => 
                <GiftGridItem key={image.id} {...image}/>
            )}
        </div>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
}