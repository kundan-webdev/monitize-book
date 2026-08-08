import "./Comparison.css";

const Comparison = ({ data }) => {
  if (!data?.items?.length) return null;

  return (
    <div className="comparison">
      {data.items.map((item, i) => (
        <div key={i} className="comparison__item">
          <p className="comparison__title">{item.title}</p>
          <p className="comparison__value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export const StatCard = ({ label, value, description }) => (
  <div className="comparison comparison--single">
    <div className="comparison__item">
      <p className="comparison__title">{label}</p>
      <p className="comparison__value">{value}</p>
      {description && <p className="comparison__description">{description}</p>}
    </div>
  </div>
);

export default Comparison;
