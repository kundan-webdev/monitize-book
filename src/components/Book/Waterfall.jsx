import "./Waterfall.css";

const Waterfall = ({ data }) => {
  if (!data?.steps?.length) return null;

  return (
    <ol className="waterfall">
      {data.steps.map((step, i) => (
        <li key={i} className="waterfall__step">
          <span className="waterfall__operator" aria-hidden="true">
            {step.operator}
          </span>
          <span className="waterfall__label">{step.label}</span>
          <span className="waterfall__value">{step.value}</span>
        </li>
      ))}
    </ol>
  );
};

export default Waterfall;
