import React from 'react';
import { COLORS_BY_THEME } from './constants';
import { convertPolarToCartesian, normalize, range } from '../../utils';
import styled from 'styled-components';

export type Theme = keyof typeof COLORS_BY_THEME;
export type ThemeColors = (typeof COLORS_BY_THEME)[Theme];

type ShapeProps = {
  index: number;
  colors: ThemeColors;
};

export const Circle: React.FC<ShapeProps> = ({ index, colors }) => {
  return (
    <circle
      cx={100}
      cy={50}
      r={index * 3.5 * 2}
      stroke={colors.lineColors[index % colors.lineColors.length]}
    />
  );
};

export const Polygon: React.FC<ShapeProps> = ({ index, colors }) => {
  const pointDistance = index * 9 + 5;
  const numOfPoints = 5;
  const angles = range(numOfPoints).map((index) =>
    normalize(index, 0, numOfPoints, 0, Math.PI * 2)
  );

  const points = angles
    .map((angle) => {
      const twistyAngle = angle + index * -0.15;
      const [x, y] = convertPolarToCartesian([twistyAngle, pointDistance]);

      return [x + 100, y + 50];
    })
    .join(' ');

  return (
    <polygon
      points={points}
      stroke={colors.lineColors[index % colors.lineColors.length]}
    />
  );
};

export type Shape = 'circles' | 'polygons';

type GenerativeArtProps = {
  numOfLines: number;
  colorTheme: Theme;
  shape: Shape;
};

const GenerativeArt: React.FC<GenerativeArtProps> = ({
  numOfLines,
  colorTheme,
  shape,
}) => {
  const colors = COLORS_BY_THEME[colorTheme];

  return (
    <ArtWrapper
      style={{
        background: colors.background,
        borderColor: colors.background,
      }}
    >
      <svg viewBox="0 0 200 100" fill="none">
        {range(numOfLines).map((index) => {
          const Shape = shape === 'circles' ? Circle : Polygon;

          return <Shape key={index} index={index} colors={colors} />;
        })}
      </svg>
    </ArtWrapper>
  );
};

export default GenerativeArt;

const ArtWrapper = styled.div`
  border: 3px solid;
  border-radius: 4px;
  margin-bottom: 8px;
`;
