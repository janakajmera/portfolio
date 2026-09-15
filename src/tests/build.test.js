import { existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { describe, expect, test } from "vitest";

describe("Build output", () => {
  test("index JavaScript file exists", () => {
    const assetsPath = resolve("dist/assets");

    expect(existsSync(assetsPath)).toBe(true);

    const files = readdirSync(assetsPath);

    const indexJs = files.find(
      (file) => file.startsWith("index-") && file.endsWith(".js")
    );

    expect(indexJs).toBeDefined();
  });
});