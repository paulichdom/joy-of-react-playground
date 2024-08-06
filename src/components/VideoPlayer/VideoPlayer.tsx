import React, { useRef } from 'react';
import styled from 'styled-components';
import { PlaybackRateContext } from '../PlabackRate';

type VideoPlayerProps = {
  src: string;
  caption: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, caption }) => {
  const playbackRateSelectId = React.useId();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { playbackRate, setPlaybackRate } =
    React.useContext(PlaybackRateContext);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = parseInt(playbackRate);
    }
  }, [playbackRate]);

  return (
    <div>
      <Figure>
        <Video ref={videoRef} controls src={src} />
        <FigCaption>{caption}</FigCaption>
      </Figure>

      <Actions>
        <label htmlFor={playbackRateSelectId}>Select playback speed:</label>
        <select
          id={playbackRateSelectId}
          defaultValue="1"
          value={playbackRate}
          onChange={(event) => setPlaybackRate(event.target.value)}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </Actions>
    </div>
  );
};

export default VideoPlayer;

const Figure = styled.figure`
  border-radius: 8px;
  padding: 4px;
  background: hsl(250deg 15% 25%);
`;

const FigCaption = styled.figcaption`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
  color: white;
`;

const Video = styled.video`
  display: block;
  width: 100%;
  border-radius: 4px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 8px 0;
  margin-top: 8px;
`;
