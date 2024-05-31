import React from 'react';
import styled from 'styled-components';

function MouseCoords() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    // TODO: Cleanup missing

    /**
     * Subscription. We only want to subscribe once, when the component first mounts.
     * Not part of React, it's part of the DOM. When we call this method, we set up a long-running
     * process that will call our callback function whenever the mousemove event is detected.
     */
    window.addEventListener('mousemove', handleMouseMove);
  }, []);

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
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: lightseagreen;
`;

const Coords = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`;
