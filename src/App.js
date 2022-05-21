import React from 'react';
import { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ConversionBar from './ConversionBar';
import Loading from './Loading';
import BtnSort from './BtnSort';
import styles from './App.css';

const CoinSection = React.lazy(() => import('./CoinSection'));

export const SORT = {
    BY_RANK: 'sort by rank',
    BY_PRICE: 'sort by price'
};

function App() {
    const [allCoins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
            })
            .catch(error => alert(error));

    }, []);

    useEffect(() => {
        setSortOrder(allCoins);
    })

    const [sortedCoins, setSortOrder] = useState(allCoins);

    const [search, setSearch] = useState('');

    const filteredCoins = sortedCoins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        || coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    };

    const [convert, setConvert] = useState('');

    const handleConvert = (e) => {
        e.preventDefault();
        setConvert(parseFloat(e.target.value));
    };

    
    const [sortBtnText, setSortBtnText] = useState(SORT.BY_PRICE);
    const [isSorted, setSorted] = useState(0);

    const toggleSort = () => {

        switch (isSorted) {

            case 0:
                const sortedCoins = allCoins.sort((a, b) => b.current_price - a.current_price);
                setSortOrder(sortedCoins);
                setSorted(1);
                setSortBtnText(SORT.BY_RANK);
                break;

            case 1:
                const unsortedCoins = allCoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
                setSortOrder(unsortedCoins);
                setSorted(0);
                setSortBtnText(SORT.BY_PRICE);
                break;
        }

    };

    return (
        <>
            <header>
                <img src="images/logo.png" alt='logo' className='coin_logo' />
            </header>
            <main>
                <div className='coin_app'>
                    <div className='controls'>
                        <SearchBar type='text' placeholder='search...' onChange={handleSearch} />
                        <ConversionBar type='text' placeholder='convert USD to coin...' onChange={handleConvert} />
                        <BtnSort sortBtnText={sortBtnText} onClick={toggleSort} />
                    </div>
                    <Suspense fallback={<Loading/>}>
                        <CoinSection filteredCoins={filteredCoins} convert={convert} />
                    </Suspense>
                    
                </div>
            </main>
        </>
    );

}

export default App;
