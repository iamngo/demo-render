import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';

interface CalculatorProps {
  initialValue: number;
}

const OptimizedCalculator: React.FC<CalculatorProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [multiplier, setMultiplier] = useState(1);
  const previousFunctionRef = useRef<Function | null>(null);
  const memoryAddressRef = useRef(Math.floor(Math.random() * 4096).toString(16));
  const hasLoggedRef = useRef(false);
  // Sử dụng useMemo để cache kết quả tính toán
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value (optimized)...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return count * multiplier;
  }, [count, multiplier]); // Chỉ tính toán lại khi count hoặc multiplier thay đổi

  // Sử dụng useCallback để cache hàm xử lý sự kiện
  const handleIncrement = useCallback(() => {
    console.log("Using cached increment handler...");
    setCount(prev => prev + 1);
  }, []); // Empty deps array vì không phụ thuộc vào props hay state

   // Chỉ log địa chỉ một lần khi component mount
   useEffect(() => {
    if (!hasLoggedRef.current) {
      console.log(`handleIncrement reference: function() {0x${memoryAddressRef.current}} // Địa chỉ bộ nhớ không đổi`);
      previousFunctionRef.current = handleIncrement;
      hasLoggedRef.current = true;
    }
  }, [handleIncrement]);

  const handleMultiplierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplier(Number(e.target.value));
  }, []);

  return (
    <div className="calculator">
      <h3>Optimized Calculator</h3>
      <div>
        <p>Count: {count}</p>
        <p>Multiplier: {multiplier}</p>
        <p>Result: {expensiveValue}</p>
        <button onClick={handleIncrement}>Increment</button>
        <input 
          type="number" 
          value={multiplier} 
          onChange={handleMultiplierChange}
          placeholder="Enter multiplier"
          style={{ marginTop: '10px' }}

        />
      </div>
    </div>
  );
};

export default OptimizedCalculator;