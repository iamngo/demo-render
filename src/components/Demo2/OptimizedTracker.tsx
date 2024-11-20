import React, { useState, useEffect, useCallback, useRef } from 'react';

interface TrackerProps {
  render: (data: { x: number; y: number; renderTime: number }) => React.ReactNode;
}

const MouseTrackerWrapper: React.FC<TrackerProps> = React.memo(({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [renderTime, setRenderTime] = useState(0);
  const startTimeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    startTimeRef.current = performance.now();
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const endTime = performance.now();
    setRenderTime(endTime - startTimeRef.current);
  }, [position]);

  return <>{render({ ...position, renderTime })}</>;
});

interface ScrollProps {
  render: (scrollY: number, renderTime: number) => React.ReactNode;
}

const ScrollTrackerWrapper: React.FC<ScrollProps> = React.memo(({ render }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [renderTime, setRenderTime] = useState(0);
  const startTimeRef = useRef(0);

  const handleScroll = useCallback(() => {
    startTimeRef.current = performance.now();
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const endTime = performance.now();
    setRenderTime(endTime - startTimeRef.current);
  }, [scrollPosition]);

  return <>{render(scrollPosition, renderTime)}</>;
});

const MouseDisplay = React.memo(({ x, y, renderTime }: { x: number; y: number; renderTime: number }) => (
  <div>
    <h3>Mouse Position (Optimized):</h3>
    <p>X: {x}, Y: {y}</p>
    <p className="render-time">Render time: {renderTime.toFixed(2)}ms</p>
  </div>
));

const ScrollDisplay = React.memo(({ position, renderTime }: { position: number; renderTime: number }) => (
  <div>
    <h3>Scroll Position (Optimized):</h3>
    <p>Y: {position}px</p>
    <p className="render-time">Render time: {renderTime.toFixed(2)}ms</p>
  </div>
));

export { MouseTrackerWrapper, ScrollTrackerWrapper, MouseDisplay, ScrollDisplay };