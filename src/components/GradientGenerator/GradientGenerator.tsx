import * as React from "react";
import { produce } from "immer";
import styled from "styled-components";

type State = {
  colors: string[];
  numOfVisibleColors: number;
};

type Action =
  | {
      type: "add-color";
    }
  | {
      type: "remove-color";
    }
  | {
      type: "change-color";
      index: number;
      value: string;
    };

const INITIAL_STATE: State = {
  colors: ["#FFD500", "#FF0040", "#FF0040", "#FF0040", "#FF0040"],
  numOfVisibleColors: 2,
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "add-color": {
        draftState.numOfVisibleColors += 1;
        break;
      }
      case "remove-color": {
        draftState.numOfVisibleColors -= 1;
        break;
      }
      case "change-color": {
        draftState.colors[action.index] = action.value;
        break;
      }
      default: {
        return state;
      }
    }
  });
};

const GradientGenerator: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const { colors, numOfVisibleColors } = state;

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  function handleAddColor() {
    if (numOfVisibleColors >= 5) {
      window.alert("There is a maximum of 5 colors");
      return;
    }

    dispatch({ type: "add-color" });
  }

  function handleRemoveColor() {
    if (numOfVisibleColors <= 2) {
      window.alert("There is a minimum of 2 colors");
      return;
    }

    dispatch({ type: "remove-color" });
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
                    dispatch({
                      type: "change-color",
                      index,
                      value: event.target.value,
                    });
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
