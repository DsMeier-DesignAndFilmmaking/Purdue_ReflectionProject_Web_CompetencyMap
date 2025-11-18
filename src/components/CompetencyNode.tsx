import { motion } from "framer-motion"
import type { Competency } from "../data/competencies"

type CompetencyNodeProps = {
  competency: Competency
  isActive: boolean
  onSelect: (competency: Competency) => void
}

const nodeVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(207, 185, 145, 0)",
  },
  hover: {
    scale: 1.08,
    boxShadow: "0 0 25px rgba(46, 90, 136, 0.35)",
  },
  active: {
    scale: 1.04,
    boxShadow: "0 0 25px rgba(46, 90, 136, 0.5)",
  },
}

export const CompetencyNode = ({
  competency,
  isActive,
  onSelect,
}: CompetencyNodeProps) => {
  return (
    <motion.button
      type="button"
      className="flex h-32 w-32 items-center justify-center rounded-full border border-gold bg-white/90 text-center text-base font-semibold text-ebony shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-blue/40"
      variants={nodeVariants}
      initial="rest"
      animate={isActive ? "active" : "rest"}
      whileHover="hover"
      whileFocus="hover"
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      onClick={() => onSelect(competency)}
      aria-pressed={isActive}
      aria-label={competency.title}
    >
      <span className="px-4 leading-snug">{competency.title}</span>
    </motion.button>
  )
}

