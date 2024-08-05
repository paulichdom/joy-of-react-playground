import { DATA } from './data';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styled from 'styled-components';

const PlaybackRate: React.FC = () => {
  return (
    <Main>
      <h1>Video archives</h1>
      {DATA.map(({ id, video, createdBy, license }) => (
        <article key={id}>
          <VideoPlayer src={video.src} caption={video.caption} />
          <DescriptionList>
            <Term>Created by</Term>
            <Description>{createdBy}</Description>
            <Term>Licensed under</Term>
            <Description>{license}</Description>
          </DescriptionList>
        </article>
      ))}
    </Main>
  );
};

export default PlaybackRate;

const Main = styled.main`
  padding: 0 16px 0;
  color: white;
  background: hsl(250deg 20% 15%);
`;

const DescriptionList = styled.dt`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 16px;
  margin-top: 8px;
  gap: 4px 16px;
`;

const Term = styled.dt`
  text-align: right;
  color: hsl(250deg 15% 75%);
`;

const Description = styled.dd`
  font-weight: 500;
`;
