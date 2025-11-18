export type NodePosition = {
  x: number
  y: number
}

export const getNodeTransform = (position: NodePosition): string => {
  const { x, y } = position
  return `translate(${x}px, ${y}px)`
}

