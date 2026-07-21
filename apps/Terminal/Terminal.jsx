import { useState } from "react";
import "./terminal.scss";

const WELCOME = "Nexus OS Terminal — type 'help' for a list of commands";

const COMMANDS = {
  help: () => "Available commands: help, date, echo <text>, whoami, clear",
  date: () => new Date().toString(),
  whoami: () => "guest@nexus-os",
  clear: () => "__CLEAR__"
};

export default function Terminal() {
  const [lines, setLines] = useState([WELCOME]);
  const [input, setInput] = useState("");

  function runCommand(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const [cmd, ...rest] = trimmed.split(" ");

    let output;
    if (cmd === "echo") {
      output = rest.join(" ");
    } else if (COMMANDS[cmd]) {
      output = COMMANDS[cmd]();
    } else {
      output = `command not found: ${cmd}`;
    }

    if (output === "__CLEAR__") {
      setLines([]);
      return;
    }

    setLines((prev) => [...prev, `guest@nexus-os ~ % ${trimmed}`, output]);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  }

  return (
    <div className="terminal" onClick={(e) => e.currentTarget.querySelector("input")?.focus()}>
      {lines.map((line, i) => (
        <div className="terminal-line" key={i}>
          {line}
        </div>
      ))}
      <div className="terminal-line terminal-prompt">
        <span>guest@nexus-os ~ %</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
