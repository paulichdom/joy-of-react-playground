import React from 'react';

import VideoPlayer from './VideoPlayer';
import styled from 'styled-components';

const PlaybackWithCredits: React.FC = () => {
  return (
    <Container>
      <VideoPlayer
        src="https://sandpack-bundler.vercel.app/videos/snowstorm.mp4"
        caption="Snow falls by a pine tree and house"
      />
      <DescriptionList>
        <DescriptionTerm>Filmed by</DescriptionTerm>
        <DescriptionDetails>Karolina Grabowska</DescriptionDetails>
        <DescriptionTerm>Licensed under</DescriptionTerm>
        <DescriptionDetails>Creative Commons Zero (CC0)</DescriptionDetails>
      </DescriptionList>
    </Container>
  );
};

export default PlaybackWithCredits;

const Container = styled.section``;

const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 16px;
  margin-top: 8px;
  gap: 4px 16px;
`;

const DescriptionTerm = styled.dt`
  text-align: right;
`;

const DescriptionDetails = styled.dd`
  font-weight: 500;
`;
