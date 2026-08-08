import FinancialTable from "./FinancialTable";
import Waterfall from "./Waterfall";
import ExpenseBuckets from "./ExpenseBuckets";
import Comparison, { StatCard } from "./Comparison";
import StatementComparison from "./StatementComparison";
import "./DataBlock.css";

const DataBlock = ({ data }) => {
  if (!data?.type) return null;

  switch (data.type) {
    case "financial-table":
      return (
        <div className="data-block">
          <FinancialTable data={data} />
        </div>
      );

    case "waterfall":
      return (
        <div className="data-block">
          <Waterfall data={data} />
        </div>
      );

    case "expense-buckets":
      return (
        <div className="data-block">
          <ExpenseBuckets data={data} />
        </div>
      );

    case "comparison":
      return (
        <div className="data-block">
          <Comparison data={data} />
        </div>
      );

    case "statement-comparison":
      return (
        <div className="data-block">
          <StatementComparison data={data} />
        </div>
      );

    case "balance-sheet-preview":
      return (
        <div className="data-block">
          <StatCard
            label={data.label}
            value={data.value}
            description={data.description}
          />
        </div>
      );

    default:
      console.warn(`[Book] Unknown data block: ${data.type}`);
      return null;
  }
};

export default DataBlock;
