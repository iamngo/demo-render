import React, { useEffect, useRef, useState } from 'react';

interface CalculatorProps {
  initialValue: number;
}

const UnoptimizedCalculator: React.FC<CalculatorProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [multiplier, setMultiplier] = useState(1);
  const previousFunctionRef = useRef<Function | null>(null);

  // Hàm tính toán phức tạp (được tạo lại mỗi lần render)
  const calculateExpensiveValue = (num: number) => {
    console.log("Calculating expensive value...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return num * multiplier;
  };

  // Hàm xử lý sự kiện (được tạo lại mỗi lần render)
  const handleIncrement = () => {
    console.log("Creating new increment handler...");
    setCount(prev => prev + 1);
  };

  // Kiểm tra sự thay đổi của handleIncrement qua useEffect
  useEffect(() => {
    if (previousFunctionRef.current !== handleIncrement) {
      const newAddress = Math.floor(Math.random() * 4096).toString(16);
      console.log(`handleIncrement reference: function() {0x${newAddress}} // Địa chỉ bộ nhớ mới`);
      previousFunctionRef.current = handleIncrement;
    }
  }, [handleIncrement]);

  const handleMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplier(Number(e.target.value));
  };

  const expensiveValue = calculateExpensiveValue(count);

  return (
    <div className="calculator">
      <h3>Unoptimized Calculator</h3>
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

export default UnoptimizedCalculator;