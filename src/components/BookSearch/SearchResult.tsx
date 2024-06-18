import React from 'react';
import { Book } from '../../components/BookSearch/BookSearch';

type SearchResultProps = {
  result: Book;
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <article className="search-result">
      <div className="image-container">
        <img alt="" src={result.coverSrc} />
      </div>
      <div className="description">
        <p className="name">{result.name}</p>
        <p className="author">
          By <b>{result.author}</b>
        </p>
        <p className="abstract">{result.abstract}</p>
      </div>
    </article>
  );
};

export default SearchResult;
