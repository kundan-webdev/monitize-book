import { padNumber } from "../../utils/helpers";
import "./PageMeta.css";

export const Tag = ({ tag }) => {
  if (!tag) return null;
  return <span className="page-meta__tag">{tag}</span>;
};

export const FloorOrBucket = ({ entry }) => {
  if (!entry) return null;
  return (
    <div className="page-meta__numeral">
      <span className="page-meta__numeral-value">{padNumber(entry.number)}</span>
    </div>
  );
};

export const BucketsOverview = ({ buckets }) => {
  if (!buckets?.length) return null;
  return (
    <ol className="page-meta__buckets">
      {buckets.map((b) => (
        <li key={b.number} className="page-meta__buckets-item">
          <span className="page-meta__buckets-number">{padNumber(b.number)}</span>
          <span className="page-meta__buckets-title">{b.title}</span>
        </li>
      ))}
    </ol>
  );
};

export const Calculation = ({ calculation }) => {
  if (!calculation) return null;
  return (
    <div className="page-meta__calculation">
      {calculation.label && (
        <p className="page-meta__calculation-label">{calculation.label}</p>
      )}
      <p className="page-meta__calculation-formula">
        {calculation.formula} <span aria-hidden="true">=</span> {calculation.result}
      </p>
    </div>
  );
};

export const ChecklistMark = () => (
  <span className="page-meta__checklist" aria-hidden="true">
    ✓
  </span>
);

export const NextBookCard = ({ nextBook }) => {
  if (!nextBook) return null;
  return (
    <div className="page-meta__next-book">
      <p className="page-meta__next-book-kicker">Coming Next</p>
      <h4 className="page-meta__next-book-title">{nextBook.title}</h4>
      {nextBook.subtitle && (
        <p className="page-meta__next-book-subtitle">{nextBook.subtitle}</p>
      )}
      {nextBook.teaser && (
        <p className="page-meta__next-book-teaser">{nextBook.teaser}</p>
      )}
    </div>
  );
};

export const Credits = ({ credits }) => {
  if (!credits) return null;
  return (
    <div className="page-meta__credits">
      {credits.publisher && (
        <p className="page-meta__credits-publisher">{credits.publisher}</p>
      )}
      {credits.tagline && (
        <p className="page-meta__credits-tagline">{credits.tagline}</p>
      )}
      {credits.author && (
        <p className="page-meta__credits-author">{credits.author}</p>
      )}
    </div>
  );
};
