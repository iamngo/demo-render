import { useCallback, useState } from 'react';
import OtherComponent from './OtherComponent';
import Modal from './Modal';
import OptimizedOtherComponent from './OptimizedOtherComponent';

function ExpensiveList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  console.log("🔄 ExpensiveList Rendered");
  const onCloseModal = useCallback(()=>setIsModalOpen(false),[isModalOpen]);

  return (
    <div className="list-container">
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
      <OptimizedOtherComponent />
      </Modal>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
        {/* Component này sẽ bị re-render khi modal thay đổi */}
        <OtherComponent />

      {/* {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This is a modal dialog</p>
            <button onClick={() => setIsModalOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ExpensiveList;