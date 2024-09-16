import React from 'react';
import { Image } from './types';
import styled from 'styled-components';

const ImageGallery: React.FC<{ images: Image[] }> = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => (
        <ImageItem key={image.originalSource} data={image}></ImageItem>
      ))}
    </Wrapper>
  );
};

const ImageItem: React.FC<{ data: Image }> = ({ data }) => {
  return (
    <Figure>
      <a href={data.originalSource} target="blank" rel="noopener noreferrer">
        <img
          src={data.src}
          alt={data.alt}
          style={{ aspectRatio: data.aspectRatio }}
        />
      </a>
      <FigCaption>
        Photograph by <strong>{data.photographer}</strong>
      </FigCaption>
    </Figure>
  );
};

export default ImageGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  padding-bottom: 64px;
`;

const Figure = styled.figure`
  background: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 1px 2px hsl(350deg 100% 30% / 0.1),
    0px 2px 4px hsl(350deg 100% 30% / 0.1),
    0px 4px 8px hsl(350deg 100% 30% / 0.1);
`;

const FigCaption = styled.figcaption`
  font-size: 0.875rem;
  text-align: center;
`;
