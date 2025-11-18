export type Competency = {
  id: string
  title: string
  description: string
  examples: string[]
  position: {
    x: number
    y: number
  }
}

export const competencies: Competency[] = [
  {
    id: "critical-thinking",
    title: "Critical Thinking",
    description: "Analyze, evaluate, and synthesize ideas effectively.",
    examples: ["Question assumptions", "Draw evidence-based conclusions"],
    position: { x: 0, y: -120 },
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Work effectively within teams and across differences.",
    examples: ["Listen actively", "Resolve conflicts constructively"],
    position: { x: 120, y: 60 },
  },
  {
    id: "reflection",
    title: "Reflection",
    description: "Assess personal growth and learning through feedback.",
    examples: ["Journaling", "Self-evaluation"],
    position: { x: -120, y: 60 },
  },
]
