import React from "react";
import { ReactFlow, Background } from "@xyflow/react";
import data from "./data.json";
import { useEdgesState, useNodesState } from "@xyflow/react";

const { nodes } = data;

const _nodes = nodes.map((node) => {
  const { position, id } = node;
  return {
    type: "input",
    width: 200,
    height: 50,
    position,
    id,
    data: { label: node.data.moduleName },
    style: {
      border: "1px solid black",
    },
  };
});

const Page = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(_nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <div
      style={{
        padding: 20,
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitViewOptions={{
          padding: 2,
          minZoom: 1,
          maxZoom: 1,
        }}
        proOptions={{ hideAttribution: true }}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange as any}
      ></ReactFlow>
    </div>
  );
};

export default Page;
