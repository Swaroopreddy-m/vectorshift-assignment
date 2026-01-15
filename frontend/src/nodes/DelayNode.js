import BaseNode from "./BaseNode";

export const DelayNode = ({id}) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      icon="⏱"
      inputs={["in"]}
      outputs={["out"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        Delay (ms)
        <input
          type="number"
          defaultValue={1000}
          className="node-input"
        />
      </label>
    </BaseNode>
  );
};
