import React from 'react';
import styles from './Header.module.scss';

function Header (props) {
    return (
        <header className={styles.header}>
            <h2 className={styles.projectName}><span>S</span> <span>Music</span></h2>
            <h1 className={styles.heading}>Select category</h1>
        </header>
    )
}

export default Header;