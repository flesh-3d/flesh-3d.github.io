import styles from './Coins.module.css';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  USD
}) => {

  return (
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
  
                  {USD > 0 ? (
                      <p className={styles.coin_price}>{(USD/price).toFixed(4)}</p>
                  ) : (
                        <p className={styles.coin_price}>${price}</p>
                  )}

              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
  );
};

export default Coins;
