import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import "./HorizontalSection.css";

const HorizontalSection = ({ children }) => {
  const { wrapperRef, trackRef } = useHorizontalScroll();

  return (
    <div className="horizontal-section" ref={wrapperRef}>
      <div className="horizontal-section__track" ref={trackRef}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalSection;