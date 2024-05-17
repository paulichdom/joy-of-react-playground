import React from 'react';
import GenerativeArt, { Shape, Theme } from './GenerativeArt';
import styled from 'styled-components';

const GenerativeArtControls = () => {
  const [numOfLines, setNumOfLines] = React.useState(5);
  const [colorTheme, setColorTheme] = React.useState<Theme>('basic');
  const [shape, setShape] = React.useState<Shape>('circles');
  return (
    <Wrapper>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />
      <form>
        <fieldset>
          <legend>Controls</legend>
          <Row>
            <Column>
              <ControlHeading htmlFor="num-of-lines">
                Number of lines
              </ControlHeading>
              <RangeInput id="num-of-lines" type="range" min="1" max="15" />
            </Column>
          </Row>
          <Row>
            <Column>
              <ControlHeading htmlFor="color-theme">
                Color Theme:
              </ControlHeading>
              <SelectInput id="color-theme">
                <option value="basic">Basic</option>
                <option value="monochrome">Monoschrome</option>
                <option value="basic">Froot Loops</option>
                <option value="basic">Spooky Night</option>
              </SelectInput>
            </Column>
            <Column>
              <ControlHeading>Shape:</ControlHeading>
              <RadioWrapper>
                <RadioOption>
                  <input type="radio" />
                  <label>Circles</label>
                </RadioOption>
                <RadioOption>
                  <input type="radio" />
                  <label>Poliygons</label>
                </RadioOption>
              </RadioWrapper>
            </Column>
          </Row>
        </fieldset>
      </form>
    </Wrapper>
  );
};

export default GenerativeArtControls;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 155px;
`;

const ControlHeading = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1.125rem;
`;

const RangeInput = styled.input`
  display: block;
  width: 100%;
`;

const SelectInput = styled.select`
  display: block;
  width: 100%;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
