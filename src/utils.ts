export const range = (
  start: number,
  end?: number,
  step: number = 1
): number[] => {
  const output: number[] = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

export const normalize = (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // First, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, traanspose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};

export const convertPolarToCartesian = ([angle, radius]: [number, number]) => {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return [x, y];
};
