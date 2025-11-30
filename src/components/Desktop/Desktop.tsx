// src/components/Desktop/Desktop.tsx
import React from 'react';
import Icon from './Icon';
import Navbar from './Navbar';

const Desktop: React.FC = () => {
  const icons = [
    { name: 'finder', defaultPosition: { x: 72, y: 85 } },
    { name: 'trash', defaultPosition: { x: 1350, y: 525 } },
    { name: 'folder', defaultPosition: { x: 1321, y: -100 } },
    { name: 'mail', defaultPosition: { x: 200, y: 300 } },
    { name: 'itunes', defaultPosition: { x: 100, y: -20 } },
  ];

  return (
    <div className="desktop">
      <Navbar/>
      {icons.map(icon => (
        <Icon key={icon.name} iconName={icon.name} defaultPosition={icon.defaultPosition} />
      ))}
    </div>
  );
};

export default Desktop;
