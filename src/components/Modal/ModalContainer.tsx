import styled from 'styled-components';
import { useToggle } from '../../hooks/use-toggle';
//import Modal from './Modal';
import HeadlessUiDialog from './HeadlessUiDialog';
import LoginForm from './LoginForm';

const ModalContainer = () => {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <Wrapper>
      {/* {isModalOpen && (
        <Modal title="Modal example" handleDismiss={toggleIsModalOpen}>
          This is an example modal! It includes <a href="">several</a>{' '}
          <a href="">different</a> <a href="">links</a>.
        </Modal>
      )} */}
      
      <HeadlessUiDialog
        title="Log in"
        isOpen={isModalOpen}
        handleDismiss={toggleIsModalOpen}
      >
        <LoginForm />
      </HeadlessUiDialog>

      <button onClick={toggleIsModalOpen}>Toggle modal</button>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p>
        <a href="https://www.lipsum.com/">Read more on lipsum.com</a>.
      </p>
    </Wrapper>
  );
};

export default ModalContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
