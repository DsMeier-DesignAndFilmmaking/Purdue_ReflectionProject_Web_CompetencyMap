import { describe, expect, it } from "vitest"
import { getNodeOffset } from "./layout"

describe("getNodeOffset", () => {
  it("returns the original coordinates for positive offsets", () => {
    expect(getNodeOffset({ x: 120, y: -80 })).toStrictEqual({
      x: 120,
      y: -80,
    })
  })

  it("handles zero coordinates without mutation", () => {
    expect(getNodeOffset({ x: 0, y: 0 })).toStrictEqual({ x: 0, y: 0 })
  })
})
