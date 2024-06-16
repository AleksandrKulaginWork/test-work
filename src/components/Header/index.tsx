import React, { Component } from 'react';
import image from '../../assets/images/wallper.png';
import styles from './style.module.css';
import Watch from 'components/Watch';
import LanguageSelector from 'components/LanguageSelector';

class Header extends Component {
    render() {
        return (
        <div className={styles.header}>
                <img src={image} alt="Logo" className={styles.logo} />
            <div className={styles.content}>
                <Watch />
                <LanguageSelector />
            </div>
        </div>
    );
}
}

export default Header;