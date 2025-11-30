// src/components/Desktop/Icon.tsx
import React from 'react';
import DraggableComponent from '../common/Draggable';

interface IconProps {
  iconName: string;
  defaultPosition: { x: number; y: number };
}

const Icon: React.FC<IconProps> = ({ iconName, defaultPosition }) => {
  let iconToLabel = new Map();
  iconToLabel.set('trash', 'Trash');
  iconToLabel.set('finder', 'About Me');
  iconToLabel.set('folder-1', 'Experience');
  iconToLabel.set('folder-2', 'Projects');
  iconToLabel.set('mail', 'Mail');
  iconToLabel.set('itunes', 'Music');
  iconToLabel.set('internet-explorer', 'Internet');
  iconToLabel.set('notes', 'Notes');

  return (
    <DraggableComponent defaultPosition={defaultPosition}>
      <div className="icon">
        <img
          src={`/app-icons/${iconName}.png`}
          alt={iconName}
          draggable="false"
        />
        <span className="icon_label">{iconToLabel.get(iconName)}</span>
      </div>
    </DraggableComponent>
  );
};

export default Icon;
