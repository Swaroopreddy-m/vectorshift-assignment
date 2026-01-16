import { useState } from "react";
import BaseNode from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      icon="📤"
      inputs={["value"]}
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
