import React from 'react';
import { MouseTracker, ScrollTracker } from '../components/Demo2/UnoptimizedTracker';
import { 
  MouseTrackerWrapper, 
  ScrollTrackerWrapper, 
  MouseDisplay, 
  ScrollDisplay 
} from '../components/Demo2/OptimizedTracker';

const Demo2: React.FC = () => {
  
  return (
    <div className="demo1-container">
      <h1>Demo 2: Render Props Pattern</h1>
      
      <div className="demo-grid">
        <section className="demo-section unoptimized">
          <h2>Chưa Tối Ưu</h2>
          <p>Sử dụng component thông thường</p>
          <MouseTracker />
          <ScrollTracker />
        </section>

        <section className="demo-section optimized">
          <h2>Đã Tối Ưu</h2>
          <p>Sử dụng Render Props Pattern với React.memo</p>
          <MouseTrackerWrapper 
            render={({ x, y, renderTime }) => (
              <MouseDisplay x={x} y={y} renderTime={renderTime} />
            )} 
          />
          <ScrollTrackerWrapper 
            render={(position, renderTime) => (
              <ScrollDisplay position={position} renderTime={renderTime} />
            )} 
          />
        </section>
      </div>

      {/* Tạo không gian để có thể scroll */}
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default Demo2;