import { memo } from 'react';

const OptimizedOtherComponent = memo(() => {
  console.log('✅ OptimizedOtherComponent không bị re-render khi modal thay đổi');
  
  return (
    <div className="other-component">
      <h3>Other Component</h3>
      <p>Component này không liên quan đến modal {Date.now()}</p>
    </div>
  );
});

export default OptimizedOtherComponent;