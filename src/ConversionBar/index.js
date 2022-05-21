import React from 'react';
import styles from './ConversionBar.module.css';

const ConversionBar = ({ ...rest }) => {
    return (
        <div className={styles.usd_convert} >
            <input className={styles.usd_input} {...rest}/>
        </div>
    );
};

export default ConversionBar;