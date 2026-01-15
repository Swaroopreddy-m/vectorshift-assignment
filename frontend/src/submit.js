import { useReactFlow } from "reactflow";
import { motion } from "framer-motion";
import './styles/submit.css';

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    try {
      const response = await fetch("http://localhost:8080/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis ✅
        
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      console.error(error);
      alert("Backend unreachable,Failed to submit pipeline ❌");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="submit-wrapper"
    >
      <motion.button 
        onClick={handleSubmit}
        className="submit-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Submit Pipeline
      </motion.button>
    </motion.div>
  );
};
