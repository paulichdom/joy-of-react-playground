import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import VisuallyHidden from '../VisuallyHidden';
import { useEscapeKey } from '../../hooks/use-escape-key';

type DrawerProps = {
  handleDismiss: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ handleDismiss, children }) => {
  useEscapeKey(handleDismiss);

  return (
    <RemoveScroll>
      <FocusLock returnFocus={true}>
        <Wrapper>
          <Backdrop onClick={handleDismiss} />
          <DrawerWrapper>
            <div>{children}</div>
            <CloseButton onClick={handleDismiss}>
              <Close size={18} /> Dismiss
              <VisuallyHidden>Dismiss drawer</VisuallyHidden>
            </CloseButton>
          </DrawerWrapper>
        </Wrapper>
      </FocusLock>
    </RemoveScroll>
  );
};

export default Drawer;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  padding: 16px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(350deg 100% 30% / 0.75);
  backdrop-filter: blur(3px);
  animation: ${fadeIn} 850ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
`;

const DrawerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  max-width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 32px;
  animation: ${slideIn} 500ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  border: none;
  background: hsl(350deg 100% 90%);
  border-radius: 4px;
`;
