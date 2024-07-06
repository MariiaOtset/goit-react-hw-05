import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.loadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
