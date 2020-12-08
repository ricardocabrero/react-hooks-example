import { useState, useEffect } from 'react';
import getGifts from '../helpers/getGifts'

const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    },[category])

    return state;
}

export {
    useFetchGifts as default
}