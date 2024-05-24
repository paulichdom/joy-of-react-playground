import * as React from 'react';
import styled from 'styled-components';

const GradientGenerator: React.FC = () => {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function handleAddColor() {
    if (numOfVisibleColors >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function handleRemoveColor() {
    if (numOfVisibleColors <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors - 1);
  }

  return (
    <Wrapper>
      <h1>Gradient Generator</h1>
      <Actions>
        <StyledButton onClick={handleRemoveColor}>Remove color</StyledButton>
        <StyledButton onClick={handleAddColor}>Add color</StyledButton>
      </Actions>
      <GradientPreview style={{ backgroundImage }} />
      <Colors>
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <ColorWrapper key={colorId}>
              <ColorLabel htmlFor={colorId}>Color {index + 1}:</ColorLabel>
              <div>
                <ColorInput
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const newColors = [...colors];
                    newColors.splice(index, 1, event.target.value);
                    setColors(newColors);
                  }}
                />
              </div>
            </ColorWrapper>
          );
        })}
      </Colors>
    </Wrapper>
  );
};

export default GradientGenerator;

const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > h1 {
    align-self: center;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const StyledButton = styled.button`
  font-size: 1.125rem;
  padding: 8px 16px;
`;

const GradientPreview = styled.div`
  aspect-ratio: 2 / 1;
  min-height: 75px;
  border-radius: 4px;
`;

const Colors = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorLabel = styled.label`
  display: block;
`;

const ColorInput = styled.input`
  width: 75px;
  height: 75px;
`;
