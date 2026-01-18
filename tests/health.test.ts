import { describe, it, expect } from "vitest";
import app from "../src/index";

describe("Health Check", () => {
  it("should return 200 and status ok", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty("status", "ok");
    expect(data).toHaveProperty("timestamp");
  });
});
