import React from 'react';
import Slider from './Slider';

const VolumeSlider: React.FC = () => {
  const [volume, setVolume] = React.useState(50);

  return (
    <Slider
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
