import classes from './AmountData.module.css';
import { useState } from 'react';

type AmountProps = {
  onCalculate: (value: number) => void;
};

function AmountData({ onCalculate }: AmountProps) {
  const [startingAmount, setStartingAmount] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [inputValidation, setInputValidation] = useState<boolean>(false);

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

    if (startingAmount === '' || duration === '') {
      setInputValidation(true);
      return;
    }

    setInputValidation(false);

    const finalAmount = calculateFutureValue(
      Number(startingAmount),
      Number(duration),
    );

    // if no starting amount, if no duration, calculate button will throw an error 'Please include the required field'

    onCalculate(finalAmount);
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
        {inputValidation && <p>Please fill all field*</p>}
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default AmountData;
