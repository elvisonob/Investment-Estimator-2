import classes from './AmountData.module.css';
import { ReactEventHandler, useState } from 'react';

function AmountData() {
  // take all the inputs
  // Let me ignore monthly deposits for now
  const [startingAmount, setStartingAmount] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartingAmount(e.target.value);
  };

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value);
  };

  function calculateAmount(e: React.SubmitEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(startingAmount);
    console.log(duration);
  }

  return (
    <div className={classes.container}>
      <form>
        <label>Starting Amount</label>
        <input
          type="number"
          id="number"
          value={startingAmount}
          onChange={handleAmount}
        />
        {/* <label>Monthly Deposit</label>
        <input type="text" id="text" /> */}
        <label>Return rate</label>
        <input type="text" id="text" value="7%" />
        <label>Duration</label>
        <input
          type="number"
          id="number"
          value={duration}
          onChange={handleDuration}
        />
        <button onClick={calculateAmount}>Calculate</button>
      </form>
    </div>
  );
}

export default AmountData;
