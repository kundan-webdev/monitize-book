import "./ExpenseBuckets.css";

const ExpenseBuckets = ({ data }) => {
  if (!data?.buckets?.length) return null;

  return (
    <div className="expense-buckets">
      {data.buckets.map((bucket) => (
        <div key={bucket.number} className="expense-buckets__bucket">
          <p className="expense-buckets__title">
            <span>{bucket.number}</span> {bucket.title}
          </p>
          <ul className="expense-buckets__items">
            {bucket.items?.map((item, i) => (
              <li key={i}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <p className="expense-buckets__total">
            <span>Total</span>
            <span>{bucket.total}</span>
          </p>
        </div>
      ))}

      {data.grandTotal && (
        <p className="expense-buckets__grand-total">
          <span>Total Expenses</span>
          <span>{data.grandTotal}</span>
        </p>
      )}
    </div>
  );
};

export default ExpenseBuckets;
