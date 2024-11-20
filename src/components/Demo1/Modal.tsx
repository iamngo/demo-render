import React, { useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    console.log('🔄 Modal Rendered');
    
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default React.memo(Modal);
