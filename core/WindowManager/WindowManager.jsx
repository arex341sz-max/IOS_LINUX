import Window from "./Window";
import { useWindows } from "../../context/WindowContext";
import { getAppById } from "../../apps/registry";

export default function WindowManager() {
  const { windows } = useWindows();

  return (
    <>
      {windows
        .filter((w) => !w.isMinimized)
        .map((w) => {
          const app = getAppById(w.appId);
          if (!app) return null;

          const { Component } = app;

          return (
            <Window
              key={w.id}
              id={w.id}
              title={w.title}
              zIndex={w.zIndex}
              defaultSize={app.defaultSize}
            >
              <Component />
            </Window>
          );
        })}
    </>
  );
}
