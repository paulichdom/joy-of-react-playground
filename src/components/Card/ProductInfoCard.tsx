import React from 'react';
import Card from './Card';
import styled from 'styled-components';

export type Product = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  inStock: boolean;
};

type ProductInfoCardProps = {
  product: Product;
};

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({ product }) => {
  return (
    <Card elevation='high'>
      <Wrapper>
        <Image alt={product.imageAlt} src={product.imageSrc} />
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <button>Add to cart</button>
      </Wrapper>
    </Card>
  );
};

export default ProductInfoCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
`;

const Price = styled.p`
  margin-bottom: 16px;
`;
