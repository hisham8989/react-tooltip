import Tooltip from "./Tooltip";

const App = () => {
  const tooltip_text = "Thanks for hovering! i'm a tooltip";
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <Tooltip text={tooltip_text} position="left">
          <button>Hover Over Me!</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
