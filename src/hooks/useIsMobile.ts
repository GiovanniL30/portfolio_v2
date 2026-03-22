import { useState, useEffect } from "react";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const useIsMobile = (below: Breakpoint = "md"): boolean => {
  const breakpoint = BREAKPOINTS[below];

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
};

export const useBreakpoint = (): Breakpoint => {
  const getBreakpoint = (): Breakpoint => {
    if (typeof window === "undefined") return "sm";
    const width = window.innerWidth;
    if (width >= BREAKPOINTS["2xl"]) return "2xl";
    if (width >= BREAKPOINTS.xl) return "xl";
    if (width >= BREAKPOINTS.lg) return "lg";
    if (width >= BREAKPOINTS.md) return "md";
    return "sm";
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const queries = Object.entries(BREAKPOINTS).map(([key, value]) => ({
      key: key as Breakpoint,
      mq: window.matchMedia(`(min-width: ${value}px)`),
    }));

    const handleChange = () => setBreakpoint(getBreakpoint());

    queries.forEach(({ mq }) => mq.addEventListener("change", handleChange));
    return () => queries.forEach(({ mq }) => mq.removeEventListener("change", handleChange));
  }, []);

  return breakpoint;
};

export const useBreakpoints = (): Record<Breakpoint, boolean> => {
  const getMatches = (): Record<Breakpoint, boolean> => {
    if (typeof window === "undefined") {
      return { sm: false, md: false, lg: false, xl: false, "2xl": false };
    }
    return Object.fromEntries(Object.entries(BREAKPOINTS).map(([key, value]) => [key, window.innerWidth >= value])) as Record<Breakpoint, boolean>;
  };

  const [matches, setMatches] = useState<Record<Breakpoint, boolean>>(getMatches);

  useEffect(() => {
    const queries = Object.entries(BREAKPOINTS).map(([key, value]) => ({
      key: key as Breakpoint,
      mq: window.matchMedia(`(min-width: ${value}px)`),
    }));

    const handleChange = () => setMatches(getMatches());

    queries.forEach(({ mq }) => mq.addEventListener("change", handleChange));
    return () => queries.forEach(({ mq }) => mq.removeEventListener("change", handleChange));
  }, []);

  return matches;
};
