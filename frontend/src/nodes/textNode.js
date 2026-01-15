import { useState } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      id={id}
      title="Text"
      icon="📝"
      inputs={["input"]}
      outputs={["output"]}
      className="input-node-wrapper"
    >
      <label className="node-label">
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="node-input"
          placeholder="Enter text..."
        />
      </label>
    </BaseNode>
  );
};
