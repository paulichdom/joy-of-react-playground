import { X as Close } from 'react-feather';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from '@headlessui/react';
import styles from './Modal.module.css';
import VisuallyHidden from '../VisuallyHidden';

type HeadlessUiDialogProps = {
  title: string;
  description?: string;
  isOpen: boolean;
  handleDismiss: () => void;
  children: React.ReactNode;
};

const HeadlessUiDialog: React.FC<HeadlessUiDialogProps> = ({
  title,
  description,
  isOpen,
  handleDismiss,
  children,
}) => {
  return (
    <Dialog className={styles.wrapper} open={isOpen} onClose={handleDismiss}>
      <div className={styles.backdrop} onClick={handleDismiss} />
      <DialogPanel className={styles.dialog}>
        <button className={styles.closeBtn} onClick={handleDismiss}>
          <Close />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </button>
        <DialogTitle>{title}</DialogTitle>
        {description && <Description>{description}</Description>}
        {children}
      </DialogPanel>
    </Dialog>
  );
};

export default HeadlessUiDialog;
