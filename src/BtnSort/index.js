import styles from './BtnSort.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilterCircleDollar} from '@fortawesome/free-solid-svg-icons';



const BtnSort = ({ sortBtnText, onClick}) => {
    return (
        <button className={styles.sortBtn} onClick={onClick}>
            <FontAwesomeIcon icon={faFilterCircleDollar} height="20px" width="20px"/>
            <span>{sortBtnText}</span>
        </button>
    );
};

export default BtnSort;