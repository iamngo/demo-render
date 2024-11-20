import { useState, useEffect, useRef } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [renderTime, setRenderTime] = useState(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      startTimeRef.current = performance.now();
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const endTime = performance.now();
    setRenderTime(endTime - startTimeRef.current);
  }, [position]);

  return (
    <div>
      <h3>Mouse Position:</h3>
      <p>X: {position.x}, Y: {position.y}</p>
      <p className="render-time">Render time: {renderTime.toFixed(2)}ms</p>
    </div>
  );
}

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [renderTime, setRenderTime] = useState(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      startTimeRef.current = performance.now();
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const endTime = performance.now();
    setRenderTime(endTime - startTimeRef.current);
  }, [scrollPosition]);

  return (
    <div>
      <h3>Scroll Position:</h3>
      <p>Y: {scrollPosition}px</p>
      <p className="render-time">Render time: {renderTime.toFixed(2)}ms</p>
    </div>
  );
}

export { MouseTracker, ScrollTracker };