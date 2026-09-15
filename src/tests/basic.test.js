import { describe, expect, test } from "vitest";

describe("Basic tests", () => {
  test("addition works", () => {
    expect(2 + 2).toBe(4);
  });

  test("portfolio name is correct", () => {
    const name = "Janak Ajmera";
    expect(name).toBe("Janak Ajmera");
  });
});