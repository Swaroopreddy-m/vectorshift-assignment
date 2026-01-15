// toolbar.js
import { DraggableNode } from './draggableNode';
import { motion } from "framer-motion";
import './styles/toolbar.css';

export const PipelineToolbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="toolbar-container"
        >
            <div className="toolbar-content">
                <div className="toolbar-nodes">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='delayNode' label='DelayNode' />
                    <DraggableNode type='apiNode' label='ApiNode' />
                    <DraggableNode type='mergeNode' label='MergeNode' />
                    <DraggableNode type='mathNode' label='MathNode' />
                </div>
                <div className="toolbar-brand">
                    <span className="vs-logo">VS</span>
                </div>
            </div>
        </motion.div>
    );
};
