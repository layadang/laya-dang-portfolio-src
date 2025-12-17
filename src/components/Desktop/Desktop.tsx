// src/components/Desktop/Desktop.tsx
import React, { useState } from 'react';
import Icon from './Icon';
import Navbar from './Navbar';
import Window from './Window';

const Desktop: React.FC = () => {
  const icons = [
    { name: 'finder', defaultPosition: { x: 72, y: 85 } },
    { name: 'trash', defaultPosition: { x: 1350, y: 525 } },
    { name: 'folder-1', defaultPosition: { x: 1321, y: -100 } },
    { name: 'folder-2', defaultPosition: { x: 1331, y: -50 } },
    { name: 'mail', defaultPosition: { x: 200, y: 200 } },
    { name: 'itunes', defaultPosition: { x: 100, y: -50 } },
    { name: 'internet-explorer', defaultPosition: { x: 1200, y: -100 } },
    { name: 'notes', defaultPosition: { x: 1120, y: -50 } },
  ];
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const openWindow = (windowId: string) => {
    setOpenWindows((prev) =>
      prev.includes(windowId) ? prev : [...prev, windowId],
    );
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows((prev) => prev.filter((id) => id !== windowId));
  };

  return (
    <div className="desktop">
      <Navbar />
      {icons.map((icon) => (
        <Icon
          key={icon.name}
          iconName={icon.name}
          defaultPosition={icon.defaultPosition}
          onOpen={openWindow}
        />
      ))}

      {openWindows.map((windowId) => (
        <Window
          key={windowId}
          windowId={windowId}
          onClose={() => closeWindow(windowId)}
        />
      ))}
    </div>
  );
};

export default Desktop;
