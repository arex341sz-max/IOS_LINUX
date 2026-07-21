import { useEffect, useState } from "react";
import { Wifi, Volume2 } from "lucide-react";
import { useWindows } from "../../context/WindowContext";
import { getAppById } from "../../apps/registry";
import "./menu.scss";

function useClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return now;
}

export default function MenuBar() {
  const now = useClock();
  const { windows } = useWindows();

  const activeWindow = [...windows]
    .filter((w) => !w.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0];

  const activeApp = activeWindow ? getAppById(activeWindow.appId) : null;

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

  return (
    <div className="menu-bar">
      <div className="left">
        <span className="apple"></span>
        <span className="app-name">{activeApp ? activeApp.title : "Finder"}</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Window</span>
      </div>

      <div className="right">
        <Wifi size={14} />
        <Volume2 size={14} />
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
