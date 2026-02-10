import classes from './Summation.module.css';

function Summation() {
  return (
    <div className={classes.summation}>
      <h3>Results</h3>
      <div className={classes.amountSummary}>
        <dt>End Balance</dt>
        <dd>£50,000</dd>
        <dt>Total Contributions</dt>
        <dd>£120,000</dd>
        <dt>Total Interest</dt>
        <dd>£20,000</dd>
      </div>
    </div>
  );
}

export default Summation;
