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
              <RangeInput
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
                value={numOfLines}
                onChange={(event) => {
                  setNumOfLines(parseInt(event.target.value));
                }}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <ControlHeading htmlFor="color-theme">
                Color Theme:
              </ControlHeading>
              <SelectInput
                id="color-theme"
                value={colorTheme}
                onChange={(event) => setColorTheme(event.target.value as Theme)}
              >
                <option value="basic">Basic</option>
                <option value="monochrome">Monoschrome</option>
                <option value="froot-loops">Froot Loops</option>
                <option value="spooky">Spooky Night</option>
              </SelectInput>
            </Column>
            <Column>
              <ControlHeading>Shape:</ControlHeading>
              <RadioWrapper>
                <RadioOption>
                  <input
                    id="shape-circle"
                    type="radio"
                    name="shape"
                    value="circles"
                    checked={shape === 'circles'}
                    onChange={(event) => setShape(event.target.value as Shape)}
                  />
                  <label htmlFor="shape-cirlce">Circles</label>
                </RadioOption>
                <RadioOption>
                  <input
                    id="shape-polygon"
                    type="radio"
                    name="shape"
                    value="polygons"
                    checked={shape === 'polygons'}
                    onChange={(event) => setShape(event.target.value as Shape)}
                  />
                  <label htmlFor="shape-poliygon">Poliygons</label>
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
