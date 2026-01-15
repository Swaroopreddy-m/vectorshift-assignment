import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="app-container">
      <header className="app-header" />

      <PipelineToolbar />
      <ReactFlowProvider>
        <PipelineUI />
        <SubmitButton />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
