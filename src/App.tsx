import { useState } from 'react';
import Demo1 from './pages/Demo1';
import './styles.scss';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
import Demo4 from './pages/Demo4';

function App() {
  const [selectedLesson, setSelectedLesson] = useState(1);

  const demos = [
    { id: 1, title: "Demo 1" },
    { id: 2, title: "Demo 2" },
    { id: 3, title: "Demo 3" },
    { id: 4, title: "Demo 4" },
  ];

  const renderContent = () => {
    switch(selectedLesson) {
      case 1:
        return <Demo1 />;
      case 2:
        return <Demo2 />;
      case 3:
        return <Demo3 />;
      case 4:
        return <Demo4 />;
      default:
        return (
          <div className="welcome-message">
            <h2>Chào mừng đến với khóa học React</h2>
            <p>Vui lòng chọn một bài học để bắt đầu</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Danh sách bài học</h1>
        <div className="lesson-list">
          {demos.map((demo) => (
            <button
              key={demo.id}
              className={`lesson-button ${selectedLesson === demo.id ? 'active' : ''}`}
              onClick={() => setSelectedLesson(demo.id)}
            >
              {demo.title}
            </button>
          ))}
        </div>
      </div>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;