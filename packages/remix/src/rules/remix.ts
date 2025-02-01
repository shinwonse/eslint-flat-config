import type { Linter } from "eslint";

export function remix(): Array<Linter.Config> {
  return [
    {
      name: "wonse/remix",
      plugins: {
        remix: require("eslint-plugin-remix"),
      },
      rules: {
        "remix/consistent-route-export": "error",
        "remix/no-empty-route-file": "error",
        "remix/no-route-file-extension": "error",
        "remix/prefer-route-id-exports": "error",
        "remix/route-convention": "error",
        "remix/routes-dir-naming": "error",
      },
    },
  ];
}
