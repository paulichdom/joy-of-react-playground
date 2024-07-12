import React from 'react';
import styled from 'styled-components';
import { Star } from 'react-feather';
import { range } from '../../utils';

type StarRatingProps = {
  stars: number;
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ stars, rating }) => {
  return (
    <Wrapper>
      {range(stars).map((num, index) => (
        <StyledStar key={index} isFilled={rating > num} />
      ))}
    </Wrapper>
  );
};

export default StarRating;

const Wrapper = styled.div`
  display: flex;
`;

const StyledStar = styled(Star)<{ isFilled: boolean }>`
  & > polygon {
    fill: ${({ isFilled }) => (isFilled ? 'currentColor' : 'none')};
  }
`;
