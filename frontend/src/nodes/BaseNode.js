import { Handle, Position, useReactFlow } from "reactflow";
import "../styles/draggableNode.css";

export default function BaseNode({
  id,
  title,
  icon,
  inputs = [],
  outputs = [],
  className = "",
  children
}) {
  const { setNodes, setEdges } = useReactFlow();

  const deleteNode = () => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) => eds.filter(
      (e) => e.source !== id && e.target !== id
    ));
  };

  return (
    <div className={`node ${className}`}>
      <div className="node-header">
        {icon} {title}
        <button
          onClick={deleteNode}
          className="node-delete-btn"
          title="Delete node"
        >
          ✕
        </button>
      </div>

      <div className="node-body">{children}</div>

      {inputs.map((id, i) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{ top: 60 + i * 22 }}
        />
      ))}

      {outputs.map((id, i) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          style={{ top: 60 + i * 22 }}
        />
      ))}
    </div>
  );
}
