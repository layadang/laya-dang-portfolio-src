// src/components/Desktop/Window.tsx
import React from 'react';
import DraggableComponent from '../common/Draggable';

interface WindowProps {
  windowId: string;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ windowId, onClose }) => {
  const renderContent = () => {
    switch (windowId) {
      case 'finder':
        return <div>About Me</div>;

      case 'folder-1':
        return <div>Experience</div>;

      case 'folder-2':
        return <div>Projects</div>;

      case 'mail':
        return <div>Mail</div>;

      case 'itunes':
        return <div>Music</div>;

      case 'internet-explorer':
        return <div>Internet</div>;

      case 'notes':
        return <div>Notes</div>;

      case 'trash':
        return <div>Trash</div>;

      default:
        return <div>ERROR: Unknown window</div>;
    }
  };

  return (
    <DraggableComponent defaultPosition={{ x: 500, y: -500 }}>
      <div className="window">
        <div className="window-titlebar">
          <span className="window-title">{windowId}</span>

          <button className="window-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="window-content">{renderContent()}</div>
      </div>
    </DraggableComponent>
  );
};

export default Window;
