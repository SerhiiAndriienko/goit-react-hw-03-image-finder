import { Component } from 'react';
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };
  handleImageClick = image => {
    this.setState({ selectedImage: image });
    document.addEventListener('keydown', this.handleKeyDown);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ load: true });
    }
  }
  handleModalClose = () => {
    this.setState({ selectedImage: null });
  };
  render() {
    const { images, load } = this.props;
    const { selectedImage } = this.state;
    return (
      <div>
        <ul className={css.ImageGallery}>
          {images &&
            images.map(image => {
              return (
                <li className={css.ImageGalleryItem} key={image.id}>
                  <div onClick={() => this.handleImageClick(image)}>
                    <ImageGalleryItem oneImage={image}></ImageGalleryItem>
                  </div>
                </li>
              );
            })}
        </ul>
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleModalClose}></Modal>
        )}
        {load && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;
