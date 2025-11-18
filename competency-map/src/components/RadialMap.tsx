import { motion } from "framer-motion"
import { competencies, type Competency } from "../data/competencies.ts"
import { getNodeOffset } from "../utils/layout.ts"
import { CompetencyNode } from "./CompetencyNode.tsx"

const radialVariants = {
  initial: { opacity: 0, scale: 0.96 },
  enter: { opacity: 1, scale: 1 },
}

const easeOutBezier = [0.16, 1, 0.3, 1] as const
const nodeWrapperTransition = { duration: 0.4, ease: easeOutBezier }

type RadialMapProps = {
  activeId: string | null
  onSelect: (competency: Competency) => void
}

export const RadialMap = ({ activeId, onSelect }: RadialMapProps) => {
  return (
    <motion.section
      className="relative m-auto flex h-[360px] w-full max-w-[360px] flex-shrink-0 items-center justify-center sm:h-[400px] sm:max-w-[400px] md:h-[460px] md:w-[460px] md:max-w-none"
      variants={radialVariants}
      initial="initial"
      animate="enter"
      transition={{ duration: 0.5, ease: easeOutBezier }}
      aria-label="Competency map"
    >
      {competencies.map((competency: Competency) => {
        const { x, y } = getNodeOffset(competency.position)

        return (
          <motion.div
            key={competency.id}
            className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-36 sm:w-36"
            style={{ 
              x, 
              y,
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={nodeWrapperTransition}
          >
            <CompetencyNode
              competency={competency}
              isActive={competency.id === activeId}
              onSelect={onSelect}
            />
          </motion.div>
        )
      })}
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-white/80 text-center text-xs font-semibold uppercase tracking-wide text-accent-blue/80 sm:h-24 sm:w-24">
        Core Skills
      </div>
    </motion.section>
  )
}
