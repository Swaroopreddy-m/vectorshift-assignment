import { useState } from "react";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Input"
      icon="📥"
      outputs={["value"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="node-input"
        />
      </label>

      <label className="node-label">
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
