"use client";
import { useEffect } from "react";

export default function ScriptBootstrap() {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}
