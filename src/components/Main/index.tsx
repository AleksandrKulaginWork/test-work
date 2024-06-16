import React, { Component } from 'react';
import styles from './style.module.css'; // Импортируем стили
import ReviewsList from 'components/ReviewsList';

class Main extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <ReviewsList />
            </div>
        );
    }
}

export default Main;
