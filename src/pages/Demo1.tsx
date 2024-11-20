import ExpensiveList from '../components/Demo1/ExpensiveList';
import OptimizedList from '../components/Demo1/OptimizedList';

const Demo1: React.FC = () => {

  
  return (
    <div className="demo1-container">
      <h1>Demo 1</h1>
      
      <div className="demo-grid">
        <section className="demo-section unoptimized">
          <h2>Chưa Tối Ưu</h2>
          <ExpensiveList/>
        </section>

        <section className="demo-section optimized">
          <h2>Đã Tối Ưu</h2>
          <OptimizedList/>
        </section>
      </div>
    </div>
  );
};

export default Demo1;