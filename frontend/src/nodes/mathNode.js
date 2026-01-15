//mathNode
import BaseNode from "./BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      icon="⚛️"
      inputs={["a", "b"]}
      outputs={["result"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        Operation
        <select className="node-select">
          <option>Add</option>
          <option>Subtract</option>
          <option>Multiply</option>
          <option>Divide</option>
        </select>
      </label>
    </BaseNode>
  );
};
