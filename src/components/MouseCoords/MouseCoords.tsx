import styled from 'styled-components';
import useMousePosition from '../../hooks/use-mouse-position.hook';

function MouseCoords() {
  const mousePosition = useMousePosition();

  return (
    <Wrapper>
      <Coords>
        {mousePosition.x} / {mousePosition.y}
      </Coords>
    </Wrapper>
  );
}

export default MouseCoords;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100%;
  background-color: lightseagreen;
`;

const Coords = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`;
