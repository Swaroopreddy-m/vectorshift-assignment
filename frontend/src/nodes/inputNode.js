// inputNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/inputNode.css';
import '../index.css';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <div className="input-node-wrapper">
      <div className="node-header">
        <span>📥 Input</span>
      </div>
      <div className="node-content">
        <label className="node-label">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="node-input"
          />
        </label>
        <label className="node-label">
          Type:
          <select value={inputType} onChange={handleTypeChange} className="node-select">
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="node-handle"
      />
    </div>
  );
};
