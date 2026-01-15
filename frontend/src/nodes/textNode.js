// textNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/textNode.css';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="text-node-wrapper">
      <div className="text-node-header">
        <span>📝 Text</span>
      </div>
      <div className="text-node-content">
        <label className="text-node-label">
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange}
            className="text-node-input"
            placeholder="Enter text..."
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="text-node-handle"
      />
    </div>
  );
};
