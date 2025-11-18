export type NodePosition = {
  x: number
  y: number
}

export const getNodeOffset = (position: NodePosition): NodePosition => ({
  x: position.x,
  y: position.y,
})
