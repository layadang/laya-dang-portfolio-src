// src/components/common/Draggable.tsx
import React from 'react';
import Draggable from 'react-draggable';

interface DraggableProps {
  children: React.ReactNode;
  defaultPosition: { x: number, y: number };
}

const DraggableComponent: React.FC<DraggableProps> = ({ children, defaultPosition }) => {
const nodeRef = React.useRef(null);
  return (
    <Draggable defaultPosition={defaultPosition} nodeRef={nodeRef}>
      <div className="draggable" ref={nodeRef}>
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
