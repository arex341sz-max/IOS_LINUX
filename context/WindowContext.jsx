import { createContext, useCallback, useContext, useMemo, useState } from "react";

const WindowContext = createContext(null);

let nextZIndex = 1;

export function WindowProvider({ children }) {
  // windows: { id, appId, title, isMinimized, zIndex }
  const [windows, setWindows] = useState([]);

  const openWindow = useCallback((app) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.appId === app.id);

      if (existing) {
        nextZIndex += 1;
        return prev.map((w) =>
          w.id === existing.id
            ? { ...w, isMinimized: false, zIndex: nextZIndex }
            : w
        );
      }

      nextZIndex += 1;
      return [
        ...prev,
        {
          id: `${app.id}-${Date.now()}`,
          appId: app.id,
          title: app.title,
          isMinimized: false,
          zIndex: nextZIndex
        }
      ];
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  }, []);

  const focusWindow = useCallback((id) => {
    nextZIndex += 1;
    const z = nextZIndex;
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: z, isMinimized: false } : w))
    );
  }, []);

  const value = useMemo(
    () => ({ windows, openWindow, closeWindow, minimizeWindow, focusWindow }),
    [windows, openWindow, closeWindow, minimizeWindow, focusWindow]
  );

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) {
    throw new Error("useWindows must be used within a WindowProvider");
  }
  return ctx;
}
