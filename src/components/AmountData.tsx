import classes from './AmountData.module.css';

function AmountData() {
  return (
    <div className={classes.container}>
      <form>
        <label>Starting Amount</label>
        <input type="number" id="number" />
        <label>Return rate</label>
        <input type="number" id="number" />
        <label>Duration</label>
        <input type="number" id="number" />
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default AmountData;
