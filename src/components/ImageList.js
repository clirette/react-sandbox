import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  console.log(images);
  const imageList = images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
