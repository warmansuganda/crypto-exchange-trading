import { PropsWithChildren, ReactNode } from 'react';

export interface ModalProps extends PropsWithChildren {
  title?: ReactNode;
  show?: boolean;
  onClose?: () => void;
}
