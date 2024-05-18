import * as React from 'react';
import styled from 'styled-components';

const NEW_COLOR = '#FF0000';

const GradientGenerator: React.FC = () => {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;
  return (
    <Wrapper>
      <h1>Gradient Generator</h1>
      <Actions>
        <StyledButton
          onClick={() =>
            setColors((prevValue) =>
              prevValue.filter(
                (_color, index) => index !== prevValue.length - 1
              )
            )
          }
          disabled={colors.length < 3}
        >
          Remove color
        </StyledButton>
        <StyledButton
          onClick={() => setColors((prevValue) => [...prevValue, NEW_COLOR])}
          disabled={colors.length > 4}
        >
          Add color
        </StyledButton>
      </Actions>
      <GradientPreview style={{ backgroundImage }} />
      <Colors>
        {colors.map((color, index) => {
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
