import { useState } from "react";
import { Rnd } from "react-rnd";
import { useWindows } from "../../context/WindowContext";
import "./window.scss";

export default function Window({ id, title, zIndex, defaultSize, children }) {
  const { closeWindow, minimizeWindow, focusWindow } = useWindows();
  const [isMaximized, setIsMaximized] = useState(false);

  const { width = 500, height = 320 } = defaultSize || {};

  return (
    <Rnd
      default={{
        x: 160 + Math.random() * 120,
        y: 80 + Math.random() * 80,
        width,
        height
      }}
      size={isMaximized ? { width: "100%", height: "calc(100% - 30px)" } : undefined}
      position={isMaximized ? { x: 0, y: 30 } : undefined}
      minWidth={300}
      minHeight={180}
      bounds="parent"
      dragHandleClassName="window-header"
      style={{ zIndex }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      onDragStart={() => focusWindow(id)}
      onMouseDown={() => focusWindow(id)}
    >
      <div className="window">
        <div className="window-header">
          <div className="buttons">
            <span
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(id);
              }}
            />
            <span
              className="min"
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(id);
              }}
            />
            <span
              className="max"
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized((prev) => !prev);
              }}
            />
          </div>

          <span className="window-title">{title}</span>
        </div>

        <div className="window-body">{children}</div>
      </div>
    </Rnd>
  );
}
