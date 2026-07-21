import { useState } from "react";
import { Wifi, Bell, Palette, Info } from "lucide-react";
import "./settings.scss";

const SECTIONS = [
  { id: "wifi", label: "Wi-Fi", Icon: Wifi },
  { id: "notifications", label: "Notifications", Icon: Bell },
  { id: "appearance", label: "Appearance", Icon: Palette },
  { id: "about", label: "About", Icon: Info }
];

export default function SettingsApp() {
  const [active, setActive] = useState("wifi");

  return (
    <div className="settings">
      <aside className="settings-nav">
        {SECTIONS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`settings-nav__item ${active === id ? "is-active" : ""}`}
            onClick={() => setActive(id)}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </aside>

      <div className="settings-panel">
        {active === "wifi" && (
          <>
            <h3>Wi-Fi</h3>
            <p>Connected to Nexus-Home-5G</p>
          </>
        )}
        {active === "notifications" && (
          <>
            <h3>Notifications</h3>
            <p>Allow notifications from apps and system.</p>
          </>
        )}
        {active === "appearance" && (
          <>
            <h3>Appearance</h3>
            <p>Theme: Light, blur enabled, accent color: blue.</p>
          </>
        )}
        {active === "about" && (
          <>
            <h3>About This Nexus OS</h3>
            <p>Version 1.0 — a browser-based desktop environment.</p>
          </>
        )}
      </div>
    </div>
  );
}
