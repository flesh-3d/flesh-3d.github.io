import styles from './Loading.module.css';


const Loading = () => {
    return (
            <div className={styles.loadingBlock}>
            <p id={styles.loading}>loading...</p>
            </div>
    )
};
    


export default Loading;