import * as React from 'react';
import styled from 'styled-components';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

type ModalProps = {
  handleDismiss: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ handleDismiss, children }) => {
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const currentlyFocused = document.activeElement;

    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      if (currentlyFocused) {
        (currentlyFocused as HTMLElement).focus();
      }
    };
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <Wrapper>
          <Backdrop onClick={handleDismiss} />
          <Dialog>
            <CloseBtn ref={closeBtnRef} onClick={handleDismiss}>
              <Close />
            </CloseBtn>
            {children}
          </Dialog>
        </Wrapper>
      </RemoveScroll>
    </FocusLock>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 16px;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;

const Dialog = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 32px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  color: white;
  transform: translateY(-100%);
  cursor: pointer;
  background: none;
  border: none;
`;
