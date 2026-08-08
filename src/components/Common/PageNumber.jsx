import { padNumber } from "../../utils/helpers";
import "./PageNumber.css";

const PageNumber = ({ current, total }) => {
  if (!total) return null;

  return (
    <div className="page-number" aria-hidden="true">
      <span className="page-number__current">{padNumber(current)}</span>
      <span className="page-number__divider">/</span>
      <span className="page-number__total">{padNumber(total)}</span>
    </div>
  );
};

export default PageNumber;
