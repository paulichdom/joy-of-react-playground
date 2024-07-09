import React from 'react';
import { Star } from 'react-feather';
import { range } from '../../utils';
import VisuallyHidden from '../VisuallyHidden';

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  photos: string[];
};

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0);

  return (
    <article className="product-details">
      <div className="photos-wrapper">
        <div>
          <img
            className="primary-photo"
            alt=""
            src={product.photos[selectedPhotoIndex]}
          />
          <div className="buttons">
            {product.photos.map((photoSrc, index) => {
              const isSelected = selectedPhotoIndex === index;

              return (
                <button
                  key={index}
                  className="thumbnail-button"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <VisuallyHidden>Toggle image #{index + 1}</VisuallyHidden>
                  <img alt="" src={photoSrc} />
                  <span
                    className="selected-ring"
                    style={{
                      opacity: isSelected ? 1 : 0,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <div className="star-rating">
          {range(5).map((num, index) => {
            const className =
              product.rating > num ? 'star filled' : 'star hollow';
            return <Star key={index} className={className} />;
          })}
        </div>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
};

export default ProductDetails;
