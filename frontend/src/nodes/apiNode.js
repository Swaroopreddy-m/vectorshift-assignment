import BaseNode from "./BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API"
      icon="🌐"
      inputs={["request"]}
      outputs={["response"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        URL
        <input
          className="node-input"
          placeholder="https://api.example.com"
        />
      </label>

      <label className="node-label">
        Method
        <select className="node-select">
          <option>GET</option>
          <option>POST</option>
        </select>
      </label>
    </BaseNode>
  );
};
