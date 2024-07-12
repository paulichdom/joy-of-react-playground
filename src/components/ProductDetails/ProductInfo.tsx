import React from 'react';
import StarRating from './StarRating';
import styled from 'styled-components';

type ProductInfoProps = {
  title: string;
  rating: number;
  description: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  rating,
  description,
}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <StarRating stars={5} rating={rating} />
      <ProductDescription>{description}</ProductDescription>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const ProductDescription = styled.p`
  white-space: pre-wrap;
  margin-top: 16px;
`;
