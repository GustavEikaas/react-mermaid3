import mermaid, { MermaidConfig } from "mermaid";
import { useEffect } from "react";
import { defaultMermaidConfig } from "../utils";

export type MermaidProps = {
  chart: string;
  config?: Partial<MermaidConfig>;
};

export function Mermaid({ chart, config }: MermaidProps) {
  useEffect(() => {
    mermaid.initialize(Object.assign(defaultMermaidConfig, config));
    mermaid.contentLoaded();
  }, [config]);

  return <div className="mermaid">{chart}</div>;
}
