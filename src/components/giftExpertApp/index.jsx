import React, { useState } from 'react';
import { AddCategory } from '../addCategory';
import { GiftGrid } from '../giftGrid';

import styles from './style.module.css';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <div className={styles.align_left}>
                {categories.map(cat => 
                    <GiftGrid key={cat} category={cat}/>
                )}
            </div>

        </>
    )
}
