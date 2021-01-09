import React from 'react';
import styles from './main-container.module.scss';

function MainContainer(props) {
    return <main className={styles.main}> {props.children} </main>
}

export default MainContainer;