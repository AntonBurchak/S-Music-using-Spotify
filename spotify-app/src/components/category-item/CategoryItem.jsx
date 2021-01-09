import React from 'react';
import styles from './category-item.module.scss';

function CategoryItem(props) {
    console.log(props);
    return (
        <div className={styles.categoryItem} style={{backgroundImage: `url(${props.icons[0].url})`}}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default CategoryItem;