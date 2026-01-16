//BaseNode

import { Handle, Position, useReactFlow } from "reactflow";

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
          className="custom-handle"
          style={{ top: 60 + i * 22 }}
        />
      ))}

      {outputs.map((id, i) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          className="custom-handle"
          style={{ top: 60 + i * 22 }}
        />
      ))}
    </div>
  );
}
