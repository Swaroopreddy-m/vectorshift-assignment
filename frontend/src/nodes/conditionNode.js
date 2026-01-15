import BaseNode from "./BaseNode";
import "../styles/inputNode.css";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      icon="❓"
      inputs={["value"]}
      outputs={["true", "false"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        Condition
        <input
          className="node-input"
          placeholder="e.g. x > 5"
        />
      </label>
    </BaseNode>
  );
};
