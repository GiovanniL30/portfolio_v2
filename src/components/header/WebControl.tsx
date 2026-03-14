import { useState, useEffect, useCallback } from "react";

const WebControl = () => {
  const [isFullscreen, setIsFullscreen] = useState(() => !!document.fullscreenElement);

  const enterFullscreen = useCallback(() => {
    document.documentElement.requestFullscreen?.();
  }, []);

  const exitFullscreen = useCallback(() => {
    document.exitFullscreen?.();
  }, []);

  const handleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div className="w-full justify-end hidden md:flex">
      <div className="flex gap-2">
        <button className="w-3 h-3 flex items-center justify-center rounded-full bg-red-500 cursor-pointer "></button>

        <button
          className="w-3 h-3 flex items-center justify-center rounded-full bg-yellow-400 cursor-pointer "
          onClick={isFullscreen ? exitFullscreen : undefined}
          title={isFullscreen ? "Exit Fullscreen" : undefined}
        ></button>

        <button
          className="w-3 h-3 flex items-center justify-center rounded-full bg-green-500 cursor-pointer "
          onClick={handleFullscreen}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        ></button>
      </div>
    </div>
  );
};

export default WebControl;
