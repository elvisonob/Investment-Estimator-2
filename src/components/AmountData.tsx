import classes from './AmountData.module.css';
import { ReactEventHandler, useState } from 'react';

function AmountData(props) {
  const [startingAmount, setStartingAmount] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartingAmount(e.target.value);
  };

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value);
  };

  function calculateFutureValue(
    startingAmount: number,
    duration: number,
  ): number {
    return startingAmount * (1 + 0.07) ** duration;
  }

  function calculation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const finalAmount = calculateFutureValue(
      Number(startingAmount),
      Number(duration),
    );

    //Move the calculated amount to App file and then Summation
    props.onCalculate(finalAmount);
  }

  return (
    <div className={classes.container}>
      <form onSubmit={calculation}>
        <label>Starting Amount</label>
        <input
          type="number"
          id="number"
          value={startingAmount}
          onChange={handleAmount}
        />
        <label>Return rate</label>
        <input type="text" id="text" defaultValue="7%" />
        <label>Duration</label>
        <input
          type="number"
          id="number"
          value={duration}
          onChange={handleDuration}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default AmountData;
