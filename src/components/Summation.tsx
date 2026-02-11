import classes from './Summation.module.css';

function Summation(props) {
  return (
    <div className={classes.summation}>
      <h3>Results</h3>
      <dl className={classes.amountSummary}>
        <dt>End Balance</dt>
        <dd>{props.summaryAmount}</dd>
        <dt>Total Contributions</dt>
        <dd>£120,000</dd>
        <dt>Total Interest</dt>
        <dd>£20,000</dd>
      </dl>
    </div>
  );
}

export default Summation;
