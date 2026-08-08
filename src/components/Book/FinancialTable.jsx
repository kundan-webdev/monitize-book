import "./FinancialTable.css";

// Supports two row shapes found in book.js:
//  - flat:     { label, description?, value, emphasis? }
//  - sectioned:{ section, items: [{label, value}], totalLabel, total }
const FinancialTable = ({ data }) => {
  if (!data?.rows?.length) return null;

  return (
    <table className="financial-table">
      <tbody>
        {data.rows.map((row, i) =>
          row.section ? (
            <SectionRows key={i} row={row} />
          ) : (
            <FlatRow key={i} row={row} />
          )
        )}
      </tbody>
    </table>
  );
};

const FlatRow = ({ row }) => (
  <tr className={row.emphasis ? "financial-table__row--emphasis" : undefined}>
    <th scope="row" className="financial-table__label">
      {row.label}
      {row.description && (
        <span className="financial-table__description">{row.description}</span>
      )}
    </th>
    <td className="financial-table__value">{row.value}</td>
  </tr>
);

const SectionRows = ({ row }) => (
  <>
    <tr className="financial-table__section">
      <th scope="colgroup" colSpan={2}>
        {row.section}
      </th>
    </tr>
    {row.items?.map((item, i) => (
      <tr key={i}>
        <td className="financial-table__label financial-table__label--indent">
          {item.label}
        </td>
        <td className="financial-table__value">{item.value}</td>
      </tr>
    ))}
    {row.total && (
      <tr className="financial-table__row--emphasis">
        <th scope="row" className="financial-table__label">
          {row.totalLabel}
        </th>
        <td className="financial-table__value">{row.total}</td>
      </tr>
    )}
  </>
);

export default FinancialTable;
