import React, { useState } from "react";
import "./createLesson.css";

function CreateLesson() {
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState("");
  const [nodeContent, setNodeContent] = useState("");
  const [boldChecked, setBoldChecked] = useState(false);
  const [italicChecked, setItalicChecked] = useState(false);
  const [noteChecked, setNoteChecked] = useState(false);
  const [headingChecked, setHeadingChecked] = useState(false);
  const [codeChecked, setCodeChecked] = useState(false);
  const [centerChecked, setCenterChecked] = useState(false);

  const nodeOptions = [
    "Select node...",
    "pre",
    "div",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ];

  const handleAddNode = () => {
    try {
      if (
        selectedNode !== nodeOptions[0] &&
        nodeContent.trim() !== "" &&
        (boldChecked ||
          italicChecked ||
          noteChecked ||
          headingChecked ||
          codeChecked ||
          centerChecked)
      ) {
        const newStyles = getClassStyles();
        const newNode = {
          node: selectedNode,
          content: nodeContent,
          classStyles: newStyles,
        };
        setNodes([...nodes, newNode]);
        setSelectedNode("");
        setNodeContent("");
        setBoldChecked(false);
        setItalicChecked(false);
        setNoteChecked(false);
        setHeadingChecked(false);
        setCodeChecked(false);
        setCenterChecked(false);
        console.log(nodes);
      } else {
        alert("Please fill all the necessary fields");
      }
    } catch (e) {
      alert("An error");
    }
  };

  const handleNodeSelect = (event) => {
    setSelectedNode(event.target.value);
  };

  const handleContentChange = (event) => {
    setNodeContent(event.target.value);
  };

  const handleBoldChange = (event) => {
    setBoldChecked(event.target.checked);
  };

  const handleItalicChange = (event) => {
    setItalicChecked(event.target.checked);
  };

  const handleNoteChange = (event) => {
    setNoteChecked(event.target.checked);
  };

  const handleHeadingChange = (event) => {
    setHeadingChecked(event.target.checked);
  };

  const handleCodeChange = (event) => {
    setCodeChecked(event.target.checked);
  };

  const handleCenterChange = (event) => {
    setCenterChecked(event.target.checked);
  };

  const getClassStyles = () => {
    const styles = [];
    if (boldChecked) {
      styles.push("bold");
    }
    if (italicChecked) {
      styles.push("italic");
    }
    if (noteChecked) {
      styles.push("note");
    }
    if (headingChecked) {
      styles.push("heading");
    }
    if (codeChecked) {
      styles.push("code");
    }
    if (centerChecked) {
      styles.push("center");
    }
    return styles;
  };

  return (
    <div className="node-generator">
      <h1 className="node-generator__title">Learners' Course Generator</h1>
      <div className="node-generator__list">
        {nodes.map((node, index) => (
          <div key={index} className="node-generator__node">
            {React.createElement(
              node.node,
              {
                className: node.classStyles.join(" "),
              },
              node.content
            )}
          </div>
        ))}
      </div>
      <div className="node-generator__controls">
        <div className="">
          <select
            className="node-generator__select"
            placeholder="Select node"
            value={selectedNode}
            onChange={handleNodeSelect}
          >
            {nodeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <textarea
            className="node-generator__textarea"
            value={nodeContent}
            onChange={handleContentChange}
          />
        </div>
        <div className="">
          <label>
            <input
              type="checkbox"
              checked={boldChecked}
              onChange={handleBoldChange}
            />
            Bold
          </label>
          <label>
            <input
              type="checkbox"
              checked={italicChecked}
              onChange={handleItalicChange}
            />
            Italic
          </label>
          <label>
            <input
              type="checkbox"
              checked={noteChecked}
              onChange={handleNoteChange}
            />
            Note
          </label>
          <label>
            <input
              type="checkbox"
              checked={headingChecked}
              onChange={handleHeadingChange}
            />
            Heading
          </label>
          <label>
            <input
              type="checkbox"
              checked={codeChecked}
              onChange={handleCodeChange}
            />
            Code
          </label>
          <label>
            <input
              type="checkbox"
              checked={centerChecked}
              onChange={handleCenterChange}
            />
            Center
          </label>
        </div>
        <div className="">
          <button className="node-generator__button" onClick={handleAddNode}>
            Add Node
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateLesson;