import React, { Component } from "react";
import { useDrag } from "react-dnd";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import styles from "./styles";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};
const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "box" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};

export default class Test extends Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Box name="Glass" />
      </DndProvider>
    );
  }
}
