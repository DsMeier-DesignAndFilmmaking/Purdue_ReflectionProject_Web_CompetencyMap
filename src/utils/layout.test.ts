import { describe, expect, it } from "vitest"
import { getNodeTransform } from "./layout"

describe("getNodeTransform", () => {
  it("returns a translate3d transform string for positive coordinates", () => {
    expect(getNodeTransform({ x: 120, y: -80 })).toBe(
      "translate3d(120px, -80px, 0)",
    )
  })

  it("handles zero coordinates without adding extra spaces", () => {
    expect(getNodeTransform({ x: 0, y: 0 })).toBe("translate3d(0px, 0px, 0)")
  })
})

