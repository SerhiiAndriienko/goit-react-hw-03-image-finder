import React from 'react';
import css from './LoadMore.module.css';

function LoadMoreButton({ onClick }) {
  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
}
export default LoadMoreButton;
