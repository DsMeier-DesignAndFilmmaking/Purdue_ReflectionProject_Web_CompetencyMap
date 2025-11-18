import { motion } from "framer-motion"
import { competencies, type Competency } from "../data/competencies"
import { getNodeTransform } from "../utils/layout"
import { CompetencyNode } from "./CompetencyNode"

type RadialMapProps = {
  activeId: string | null
  onSelect: (competency: Competency) => void
}

export const RadialMap = ({ activeId, onSelect }: RadialMapProps) => {
  return (
    <motion.section
      className="relative m-auto flex h-[420px] w-[420px] max-w-full items-center justify-center md:h-[480px] md:w-[480px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Competency map"
    >
      <div className="absolute inset-12 rounded-full border border-gold/25" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/70 via-warm-gray/40 to-white/10 backdrop-blur-[2px]" />
      <div className="absolute inset-0 rounded-full border border-ebony/5 shadow-inner" />
      {competencies.map((competency) => (
        <motion.div
          key={competency.id}
          className="absolute flex items-center justify-center"
          style={{ transform: getNodeTransform(competency.position) }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CompetencyNode
            competency={competency}
            isActive={competency.id === activeId}
            onSelect={onSelect}
          />
        </motion.div>
      ))}
      <div className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-white/80 text-center text-sm font-semibold uppercase tracking-wide text-accent-blue/80">
        Core Skills
      </div>
    </motion.section>
  )
}

