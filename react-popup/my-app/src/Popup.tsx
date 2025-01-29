import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

export const menuItems = [
  { name: 'Menu Item 1' },
  { name: 'Menu Item 2' },
  { name: 'Menu Item 3' },
  { name: 'Menu Item 4' },
  { name: 'Menu Item 5' },
];

type Props = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
};

export function Popup({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;
  return createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          pointerEvents: 'all',
        }}
        onClick={onClose}>
        {children}
      </div>
    </>,
    document.body
  );
}
