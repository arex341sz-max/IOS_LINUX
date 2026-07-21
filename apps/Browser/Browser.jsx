import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCw, Lock } from "lucide-react";
import "./browser.scss";

export default function Browser() {
  const [url, setUrl] = useState("https://www.nexus-os.dev");

  return (
    <div className="browser">
      <div className="browser-toolbar">
        <ArrowLeft size={16} />
        <ArrowRight size={16} />
        <RotateCw size={14} />
        <div className="browser-url">
          <Lock size={12} />
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
      </div>

      <div className="browser-body">
        <h2>Welcome to Nexus OS</h2>
        <p>This is a placeholder browser view. Hook up an iframe or your own start page here.</p>
      </div>
    </div>
  );
}
