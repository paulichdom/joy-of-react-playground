import React, { Fragment } from 'react';
import Boxes from './Boxes';
import styled from 'styled-components';

const PureBoxes = React.memo(Boxes);

const NameAndBoxes: React.FC = () => {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);

  const id = React.useId();

  const boxes = React.useMemo(() => {
    return [
      { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
      { flex: 3, background: 'hsl(260deg 100% 70%)' },
      { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ];
  }, [boxWidth]);

  return (
    <Fragment>
      <PureBoxes boxes={boxes} />
      <Section>
        <label htmlFor={`${id}-name`}>Name:</label>
        <Input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>First box width:</label>
        <Input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </Section>
    </Fragment>
  );
};

export default NameAndBoxes;

const Section = styled.section`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 24px;
`;
