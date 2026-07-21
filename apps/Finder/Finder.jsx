import { Folder, File, Image, Music } from "lucide-react";
import "./finder.scss";

const ITEMS = [
  { name: "Documents", Icon: Folder },
  { name: "Downloads", Icon: Folder },
  { name: "Pictures", Icon: Image },
  { name: "Music", Icon: Music },
  { name: "readme.txt", Icon: File }
];

export default function Finder() {
  return (
    <div className="finder">
      <aside className="finder-sidebar">
        <p className="finder-sidebar__label">Favorites</p>
        <ul>
          <li>Recents</li>
          <li>Applications</li>
          <li>Desktop</li>
          <li>Documents</li>
          <li>Downloads</li>
        </ul>
      </aside>

      <div className="finder-content">
        {ITEMS.map(({ name, Icon }) => (
          <div className="finder-item" key={name}>
            <Icon size={38} strokeWidth={1.5} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
