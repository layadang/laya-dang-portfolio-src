// src/components/Desktop/Desktop.tsx
import React from 'react';
import Icon from './Icon';
import Navbar from './Navbar';

const Desktop: React.FC = () => {
  const icons = [
    { name: 'finder', defaultPosition: { x: 72, y: 85 } },
    { name: 'trash', defaultPosition: { x: 1350, y: 525 } },
    { name: 'folder-1', defaultPosition: { x: 1321, y: -100 } },
    { name: 'folder-2', defaultPosition: { x: 1330, y: -70 } },
    { name: 'mail', defaultPosition: { x: 200, y: 200 } },
    { name: 'itunes', defaultPosition: { x: 100, y: -50 } },
    { name: 'internet-explorer', defaultPosition: { x: 1200, y: -100 } },
    { name: 'notes', defaultPosition: { x: 1120, y: -50 } },
  ];

  return (
    <div className="desktop">
      <Navbar />
      {icons.map((icon) => (
        <Icon
          key={icon.name}
          iconName={icon.name}
          defaultPosition={icon.defaultPosition}
        />
      ))}
    </div>
  );
};

export default Desktop;
