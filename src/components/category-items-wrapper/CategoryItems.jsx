import React from 'react';
import { connect } from 'react-redux';
import styles from './category-items.module.scss';
// import { Pagination } from '@material-ui/core';

import CategoryItem from "../category-item";

function CategoryItems(props) {
    return (
        <section className={styles.categoryItems}>
            { props.categories &&
            props.categories.items.map(category => <CategoryItem name={category.name} icons={category.icons}/>) }
        </section>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categoriesReducer.categories
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps
)(CategoryItems);