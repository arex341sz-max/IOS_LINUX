import { Folder, TerminalSquare, Settings, Globe } from "lucide-react";

import Finder from "./Finder/Finder";
import Terminal from "./Terminal/Terminal";
import SettingsApp from "./Settings/Settings";
import Browser from "./Browser/Browser";

export const APPS = [
  {
    id: "finder",
    title: "Finder",
    icon: Folder,
    Component: Finder,
    defaultSize: { width: 560, height: 380 }
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: TerminalSquare,
    Component: Terminal,
    defaultSize: { width: 560, height: 340 }
  },
  {
    id: "browser",
    title: "Safari",
    icon: Globe,
    Component: Browser,
    defaultSize: { width: 640, height: 420 }
  },
  {
    id: "settings",
    title: "System Settings",
    icon: Settings,
    Component: SettingsApp,
    defaultSize: { width: 480, height: 420 }
  }
];

export function getAppById(id) {
  return APPS.find((app) => app.id === id);
}
