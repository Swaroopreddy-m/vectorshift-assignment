import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      inputs={["system", "prompt"]}
      outputs={["response"]}
      className="input-node-wrapper"
    >
      <div style={{ fontSize: "13px", color: "#6b7280" }}>
        Large Language Model
      </div>
    </BaseNode>
  );
};
