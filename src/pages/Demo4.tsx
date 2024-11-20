import React from 'react';
import UnoptimizedList from '../components/Demo4/UnoptimizedList';
import OptimizedList from '../components/Demo4/OptimizedList';

const Demo4: React.FC = () => {
  return (
    <div className="demo1-container">
      <h1>Demo 4: Key Usage in Lists</h1>
      
      <div className="demo-grid">
        <section className="demo-section unoptimized">
          <h2>Chưa Tối Ưu</h2>
          <p>Sử dụng index làm key và không có memo</p>
          <UnoptimizedList />
        </section>

        <section className="demo-section optimized">
          <h2>Đã Tối Ưu</h2>
          <p>Sử dụng ID làm key và có memo</p>
          <OptimizedList />
        </section>
      </div>
    </div>
  );
};

export default Demo4;