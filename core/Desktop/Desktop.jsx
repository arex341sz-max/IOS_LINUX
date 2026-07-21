import MenuBar from "../../components/MenuBar/MenuBar";
import Dock from "../../components/Dock/Dock";
import WindowManager from "../WindowManager/WindowManager";
import { WindowProvider } from "../../context/WindowContext";
import "./desktop.scss";

export default function Desktop() {
  return (
    <WindowProvider>
      <div className="desktop">
        <MenuBar />
        <WindowManager />
        <Dock />
      </div>
    </WindowProvider>
  );
}
