/**
 * @fileoverview Core Zeno Framework package - schema loading, validation, and generation pipeline
 */

export const version = "0.0.1";

export function createZeno() {
  return {
    version,
  };
}

export * from "./types";
export * from "./validation";
export * from "./utils";
export { TemplateEngine, createTemplateEngine } from "./TemplateEngine";
