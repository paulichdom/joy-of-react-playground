import styled from 'styled-components';
import useIsOnscreen from '../../hooks/use-is-onscreen';

function RedSquare() {
  const [isOnscreen, elementRef] = useIsOnscreen();

  return (
    <Container>
      <Header>Red box visible: {isOnscreen ? 'YES' : 'NO'}</Header>
      <Wrapper>
        <BoxContainer>
          <Box ref={elementRef as React.MutableRefObject<null>} />
        </BoxContainer>
      </Wrapper>
    </Container>
  );
}

export default RedSquare;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  padding: 16px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 350px;
  gap: 16px;
  background-color: hsl(145deg 80% 85%);
  border-radius: 8px;
  padding: 16px;
  overflow: auto;
`;

const BoxContainer = styled.div`
  padding-top: 500px;
  padding-bottom: 500px;
  gap: 16px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;
