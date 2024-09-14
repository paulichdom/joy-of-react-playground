import * as React from 'react';
import { X as Close } from 'react-feather';
import styled from 'styled-components';

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

  return (
    <Wrapper>
      <Backdrop />
      <Dialog>
        <CloseBtn ref={closeBtnRef} onClick={handleDismiss}>
          <Close />
        </CloseBtn>
        {children}
      </Dialog>
    </Wrapper>
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
