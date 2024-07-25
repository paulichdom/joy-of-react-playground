import React, { useEffect } from 'react';
import Slider from './Slider';

const VolumeSlider: React.FC = () => {
  const [volume, setVolume] = React.useState(50);

  const sliderRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    sliderRef.current?.focus();
  }, []);

  return (
    <Slider
      shape={'square'}
      ref={sliderRef}
      label="Volume"
      min={0}
      max={100}
      value={volume}
      onChange={(event) => {
        setVolume(parseInt(event.target.value));
      }}
    />
  );
};

export default VolumeSlider;
