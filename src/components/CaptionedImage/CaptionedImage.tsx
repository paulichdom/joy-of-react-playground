import React from 'react';
import styled from 'styled-components';

type CaptionedImageProps = {
  image: React.ReactNode;
  caption: React.ReactNode;
};

const CaptionedImage: React.FC<CaptionedImageProps> = ({ image, caption }) => {
  return (
    <Figure>
      {image}
      <Divider />
      <figcaption>{caption}</figcaption>
    </Figure>
  );
};

export default CaptionedImage;

const Figure = styled.figure`
  display: flex;
  align-items: center;
  gap: 16px;

  & > *:not(:nth-child(2)) {
    min-width: 0;
    flex: 1;
  }
`;

const Divider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
