"use client";
import { useEffect } from "react";

export default function ScriptBootstrap() {
  useEffect(() => {
    // @ts-expect-error Bootstrap does not publish types for its bundle entrypoint.
    void import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}
