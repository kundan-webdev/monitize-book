import "./Container.css";

const Container = ({ children, className = "", as: Tag = "div" }) => {
  return (
    <Tag className={`container ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;