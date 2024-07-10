import React from 'react';
import { Star } from 'react-feather';
import { range } from '../../utils';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

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
    <Wrapper>
      <PhotosWrapper>
        <div>
          <PrimaryPhoto alt="" src={product.photos[selectedPhotoIndex]} />
          <Buttons>
            {product.photos.map((photoSrc, index) => {
              const isSelected = selectedPhotoIndex === index;

              return (
                <ThumbnailButton
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <VisuallyHidden>Toggle image #{index + 1}</VisuallyHidden>
                  <img alt="" src={photoSrc} />
                  <SelectedRing
                    style={{
                      opacity: isSelected ? 1 : 0,
                    }}
                  />
                </ThumbnailButton>
              );
            })}
          </Buttons>
        </div>
      </PhotosWrapper>
      <ProductInfo>
        <h1>{product.title}</h1>
        <StarRating>
          {range(5).map((num, index) => {
            return <StyledStar key={index} isFilled={product.rating > num} />;
          })}
        </StarRating>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>
    </Wrapper>
  );
};

export default ProductDetails;

const Wrapper = styled.article`
  display: flex;
  gap: 24px;
`;

const PhotosWrapper = styled.div`
  flex: 1;
  max-width: 350px;
`;

const PrimaryPhoto = styled.img`
  display: block;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

const ThumbnailButton = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  & > img {
    pointer-events: none;
  }
`;

const SelectedRing = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  border: 3px solid hsl(220deg 100% 60%);
  border-radius: 4px;
  transition: opacity 200ms;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const StarRating = styled.div`
  display: flex;
  margin-top: 16px;
`;

const ProductDescription = styled.p`
  margin-top: 32px;
  white-space: pre-wrap;
`;

const StyledStar = styled(Star)<{ isFilled: boolean }>`
  & > polygon {
    fill: ${({ isFilled }) => (isFilled ? 'currentColor' : 'none')};
  }
`;
