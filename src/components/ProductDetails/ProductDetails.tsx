import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import PhotoPicker from './PhotoPicker';

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  photos: string[];
};

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const { photos, title, rating, description } = product;
  return (
    <Wrapper>
      <PhotoPicker photos={photos} />
      <ProductInfo title={title} rating={rating} description={description} />
    </Wrapper>
  );
};

export default ProductDetails;

const Wrapper = styled.article`
  display: flex;
  gap: 24px;
`;
