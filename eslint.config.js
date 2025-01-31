import js from "@wonse/eslint-js";
import ts from "@wonse/tsconfig";

export default [
  ...js({ enableRefresh: true }),
  ...ts({ enableRefresh: true }),
];
