import React from 'react';
import CoinList from '../CoinList';
import styles from './CoinSection.module.css';

export default function CoinSection({ filteredCoins, convert }) {

    if (filteredCoins.length > 0) {
        return (
            <div className={styles.coinContainer}>
                <CoinList filteredCoins={filteredCoins} convert={convert} />
                <div className={styles.resultsDiv}>
                    <p className={styles.results}>{filteredCoins.length} results</p>
                </div>
            </div>
        )
    }
    else return <p className={styles.results}>No results.</p>;
};