import React from 'react';
import UnoptimizedCalculator from '../components/Demo3/UnoptimizedCalculator';
import OptimizedCalculator from '../components/Demo3/OptimizedCalculator';

const Demo3: React.FC = () => {

  return (
    <div className="demo1-container">
      <h1>Demo 3: useMemo & useCallback</h1>
      
      <div className="demo-grid">
        <section className="demo-section unoptimized">
          <h2>Chưa Tối Ưu</h2>
          <p>Mỗi lần render đều tạo mới function và tính toán lại</p>
          <UnoptimizedCalculator initialValue={0} />
          <p className="render-count">
          </p>
        </section>

        <section className="demo-section optimized">
          <h2>Đã Tối Ưu</h2>
          <p>Sử dụng useMemo và useCallback để cache giá trị và function</p>
          <OptimizedCalculator initialValue={0} />
          <p className="render-count">
          </p>
        </section>
      </div>
    </div>
  );
};

export default Demo3;