"use client";

import { useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 809.98px)";
const POINTER_COARSE_QUERY = "(pointer: coarse)";

function subscribe(query: string) {
  return (onChange: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  };
}

function getSnapshot(query: string) {
  return () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };
}

const getServerSnapshot = () => false;

export function useIsMobile() {
  return useSyncExternalStore(
    subscribe(MOBILE_QUERY),
    getSnapshot(MOBILE_QUERY),
    getServerSnapshot,
  );
}

export function useIsCoarsePointer() {
  return useSyncExternalStore(
    subscribe(POINTER_COARSE_QUERY),
    getSnapshot(POINTER_COARSE_QUERY),
    getServerSnapshot,
  );
}
