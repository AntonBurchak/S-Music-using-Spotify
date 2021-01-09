import React from 'react';
import styles from './searchBar.module.scss'
import settings from './settings.svg';
import { connect } from 'react-redux';
import { getCategoriesList } from "../../root/actions/actions";

function SearchBar(props) {
    
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchMain}>
                <input type="text" defaultValue={'text'} placeholder={'Type name of song here'}/>

                <div className="searchControls">
                    <button onClick={props.getCategoriesList}>Search</button>
                </div>
            </div>
            <div className={styles.searchSettings}>
                <div className={styles.searchArrow}>
                    <div className={styles.triangle}></div>
                </div>
                <img src={settings} alt=""/>
            </div>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = {
    getCategoriesList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);