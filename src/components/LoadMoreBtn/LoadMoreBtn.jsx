import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
