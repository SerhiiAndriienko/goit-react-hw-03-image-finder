import css from './ImageGalleryIte.module.css';

function ImageGalleryItem({ oneImage }) {
  return (
    <img
      className={css.ImageGalleryItem__image}
      src={oneImage.webformatURL}
      alt={oneImage.tags}
    ></img>
  );
}
export default ImageGalleryItem;
