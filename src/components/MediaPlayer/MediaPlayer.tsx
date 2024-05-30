import React from 'react';
import { Play, Pause } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

// const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

const MediaPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handlePlayControl = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };
  return (
    <Wrapper>
      <Player>
        <Image
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <Summary>
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </Summary>
        <Button onClick={handlePlayControl}>
          {!isPlaying ? <Play /> : <Pause />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </Button>
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </Player>
    </Wrapper>
  );
};

export default MediaPlayer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-top: 1px solid hsl(0deg 0% 85%);
  background: white;
`;

const Image = styled.img`
  max-height: 75px;
`;

const Summary = styled.div`
  flex: 1;
  min-width: 0px;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: hsl(0deg 0% 10%);
  border: none;
  color: white;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;
`;
