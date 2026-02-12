import classes from './Summation.module.css';

type SummationProps = {
  summaryAmount: number | null;
};
function Summation({ summaryAmount }: SummationProps) {
  return (
    <div className={classes.summation}>
      <h3>Results</h3>
      <dl className={classes.amountSummary}>
        <dt>End Balance</dt>
        <dd className={classes.endBalance}>
          £{summaryAmount?.toLocaleString()}
        </dd>
        <dt>Total Contributions</dt>
        <dd>£120,000</dd>
        <dt>Total Interest</dt>
        <dd>£20,000</dd>
      </dl>
    </div>
  );
}

export default Summation;
