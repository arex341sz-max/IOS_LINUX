import { APPS } from "../../apps/registry";
import { useWindows } from "../../context/WindowContext";
import "./dock.scss";

export default function Dock() {
  const { windows, openWindow } = useWindows();

  const isOpen = (appId) => windows.some((w) => w.appId === appId && !w.isMinimized);

  return (
    <div className="dock">
      {APPS.map((app) => {
        const { id, title, icon: Icon } = app;
        return (
          <button
            key={id}
            type="button"
            className="dock-icon"
            title={title}
            onClick={() => openWindow(app)}
          >
            <Icon />
            {isOpen(id) && <span className="dock-icon__dot" />}
          </button>
        );
      })}
    </div>
  );
}
