// llmNode.js
import { Handle, Position } from 'reactflow';
import '../styles/llmNode.css';

export const LLMNode = ({ id, data }) => {
  return (
    <div className="llm-node-wrapper">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        className="node-handle"
        style={{ top: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        className="node-handle"
        style={{ top: '75%' }}
      />
      <div className="node-header">
        <span>🤖 LLM</span>
      </div>
      <div className="llm-description">
        Large Language Model
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="node-handle"
      />
    </div>
  );
};
