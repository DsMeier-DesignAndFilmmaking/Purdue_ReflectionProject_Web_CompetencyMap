import { AnimatePresence, motion } from "framer-motion"
import type { Competency } from "../data/competencies"

type InfoPanelProps = {
  competency: Competency | null
  onClose: () => void
}

export const InfoPanel = ({ competency, onClose }: InfoPanelProps) => {
  return (
    <AnimatePresence>
      {competency && (
        <motion.div
          className="fixed inset-0 z-30 flex items-end justify-center bg-ebony/30 px-4 pb-6 pt-12 backdrop-blur-sm md:static md:inset-auto md:z-auto md:flex-1 md:bg-transparent md:px-0 md:pb-0 md:pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="competency-panel-title"
        >
          <motion.aside
            className="w-full max-w-md rounded-3xl border border-gold/40 bg-white/95 p-8 shadow-xl md:static md:max-w-full"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue/70">
                  Competency
                </p>
                <h2
                  id="competency-panel-title"
                  className="mt-2 text-2xl font-semibold text-ebony"
                >
                  {competency.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-transparent bg-warm-gray px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ebony transition hover:border-accent-blue hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60"
              >
                Close
              </button>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ebony/80">
              {competency.description}
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-blue">
                Behavioral Examples
              </h3>
              <ul className="mt-3 space-y-2 text-base text-ebony/85">
                {competency.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

