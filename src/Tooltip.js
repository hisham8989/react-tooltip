import "./Tooltip.css";

const Tooltip = ({ children, text, position }) => {
  if (!position) position = "top";
  const tooltipClassName = `tooltip tooltip-${position}`;

  return (
    <div className={tooltipClassName}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
