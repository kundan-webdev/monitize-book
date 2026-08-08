import "./StatementComparison.css";

const StatementComparison = ({ data }) => {
  if (!data?.statements?.length) return null;

  return (
    <div className="statement-comparison">
      {data.statements.map((s, i) => (
        <div key={i} className="statement-comparison__card">
          <p className="statement-comparison__title">{s.title}</p>
          <p className="statement-comparison__subtitle">{s.subtitle}</p>
          <p className="statement-comparison__description">{s.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatementComparison;
