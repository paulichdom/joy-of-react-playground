import React from 'react';
import styled from 'styled-components';

const Toasty: React.FC = () => {
  const [isShown, setIsShown] = React.useState(false);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsShown(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const translateX = isShown ? '25%' : '150%';

  return (
    <Wrapper ref={wrapperRef}>
      <Character
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </Character>
    </Wrapper>
  );
};

export default Toasty;

const Wrapper = styled.div`
  position: relative;
  pointer-events: none;
`;

const Character = styled.div`
  position: absolute;
  right: 0;
  bottom: 0%;
  font-size: 200px;
  transition: transform 200ms;
`;
