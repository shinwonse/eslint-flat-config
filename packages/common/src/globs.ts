import type { FileExtensions, GlobPattern } from "./types";

/**
 * File extension configurations for different file types
 */
export const FILE_EXTENSIONS: FileExtensions = {
  js: ["js", "mjs", "cjs"],
  ts: ["ts", "mts", "cts"],
  jsx: ["jsx", "mjsx", "cjsx"],
  tsx: ["tsx", "mtsx", "ctsx"],
  gql: ["graphql", "gql"],
  json: ["json", "jsonc", "json5"],
} as const;

/**
 * Combines multiple file extensions into a single array
 */
const combineExtensions = (...keys: Array<keyof FileExtensions>): readonly string[] => {
  return keys.flatMap(key => FILE_EXTENSIONS[key]);
};

/**
 * Creates a glob pattern for the given file extensions
 */
const createGlob = (extensions: readonly string[]): GlobPattern => {
  return `**/*.{${extensions.join(",")}}`;
};

/**
 * Creates a glob pattern for a specific path and extensions
 */
const createPathGlob = (path: string, extensions: readonly string[]): GlobPattern => {
  return `${path}.{${extensions.join(",")}}`;
};

// Source file globs
export const GLOB_SRC = createGlob(combineExtensions("js", "ts"));
export const GLOB_REACT = createGlob(combineExtensions("jsx", "tsx"));
export const GLOB_ALL = createGlob(combineExtensions("js", "ts", "jsx", "tsx"));

// JavaScript specific globs
export const GLOB_JS = createGlob(FILE_EXTENSIONS.js);
export const GLOB_JSX = createGlob(FILE_EXTENSIONS.jsx);

// TypeScript specific globs
export const GLOB_TS = createGlob(FILE_EXTENSIONS.ts);
export const GLOB_TSX = createGlob(FILE_EXTENSIONS.tsx);

// GraphQL globs
export const GLOB_GQL = createGlob(FILE_EXTENSIONS.gql);

// JSON globs
export const GLOB_JSON = createGlob(FILE_EXTENSIONS.json);

// Special configuration files
export const GLOB_TSCONFIG = "**/tsconfig.json";
export const GLOB_VSCODE = ".vscode/*.json";

// Test files
export const GLOB_TEST = createPathGlob("**/*", ["test", "spec"]);
export const GLOB_TEST_SRC = createGlob(
  combineExtensions("js", "ts", "jsx", "tsx")
    .map(ext => `test.${ext}`)
    .concat(combineExtensions("js", "ts", "jsx", "tsx").map(ext => `spec.${ext}`))
);

// Storybook files
export const GLOB_STORYBOOK_MAIN = createPathGlob(".storybook/main", combineExtensions("js", "ts"));
export const GLOB_STORIES = createPathGlob("**/*", ["stories", "story"]);
export const GLOB_STORIES_SRC = createGlob(
  combineExtensions("js", "ts", "jsx", "tsx")
    .map(ext => `stories.${ext}`)
    .concat(combineExtensions("js", "ts", "jsx", "tsx").map(ext => `story.${ext}`))
);

// Node specific globs
export const GLOB_NODE_MODULES = "**/node_modules";

/**
 * Creates a glob pattern for source files with a specific base path
 */
export const makeGlobSrcFiles = (basePath: string): GlobPattern => {
  return createPathGlob(basePath, combineExtensions("js", "ts", "jsx", "tsx"));
};

/**
 * Creates a glob pattern for JavaScript files with a specific base path
 */
export const makeGlobJsFiles = (basePath: string): GlobPattern => {
  return createPathGlob(basePath, FILE_EXTENSIONS.js);
};
