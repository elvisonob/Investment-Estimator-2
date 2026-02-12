import AmountData from './components/AmountData.tsx';
import Summation from './components/Summation.tsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [finalAmount, setFinalAmount] = useState<number | null>(null);

  return (
    <div className="layout">
      <AmountData onCalculate={setFinalAmount} />
      {finalAmount && <Summation summaryAmount={finalAmount} />}
    </div>
  );
}

export default App;
