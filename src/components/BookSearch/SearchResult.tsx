import React from 'react';
import { Book } from '../../components/BookSearch/BookSearch';
import styled from 'styled-components';

type SearchResultProps = {
  result: Book;
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image alt="" src={result.coverSrc} />
      </ImageContainer>
      <Description>
        <Name>{result.name}</Name>
        <Author>
          By <b>{result.author}</b>
        </Author>
        <Abstract>{result.abstract}</Abstract>
      </Description>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.article`
  display: flex;
  border: 2px dashed #333;
`;

const ImageContainer = styled.div`
  width: 160px;
  padding: 16px 0px 16px 16px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  transform: translate(-24px, -16px) rotate(-10deg);
  border: 2px solid white;
`;

const Description = styled.div`
  flex: 1;
  padding: 16px;
`;

const Name = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;

const Author = styled.p`
  color: #666;
  font-style: italic;
`;

const Abstract = styled.p`
  margin-top: 16px;
  padding-top: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`;
