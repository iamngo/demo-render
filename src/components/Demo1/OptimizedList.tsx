import { useState } from 'react';
import OptimizedOtherComponent from './OptimizedOtherComponent';

function OptimizedList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  console.log("🔄 OptimizedList Rendered");

  return (
    <div className="list-container">
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      {/* Component này sẽ KHÔNG bị re-render khi modal thay đổi */}
      <OptimizedOtherComponent />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This is a modal dialog</p>
            <button onClick={() => setIsModalOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptimizedList;