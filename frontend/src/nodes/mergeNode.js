//mergeNode
import BaseNode from "./BaseNode";
import "../styles/BaseNode.css";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      icon="🔀"
      inputs={["left", "right"]}
      outputs={["merged"]}
      className="input-node-wrapper"
    >
      <p style={{ fontSize: 13 }}>Merge two inputs</p>
    </BaseNode>
  );
};
