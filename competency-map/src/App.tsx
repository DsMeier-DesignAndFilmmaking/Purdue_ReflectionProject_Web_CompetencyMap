import { useState } from "react"
import { InfoPanel } from "./components/InfoPanel.tsx"
import { RadialMap } from "./components/RadialMap.tsx"
import type { Competency } from "./data/competencies.ts"

const App = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(
    null,
  )

  const handleSelect = (competency: Competency) => {
    setSelectedCompetency((current: Competency | null) =>
      current?.id === competency.id ? null : competency,
    )
  }

  const placeholderVisibility = selectedCompetency
    ? "md:opacity-0 md:invisible"
    : "md:opacity-100 md:visible"

  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-12 px-6 py-12 md:flex-row md:items-start md:gap-16 md:px-12 lg:py-20">
        <section className="flex w-full max-w-xl flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-ebony md:text-4xl">
            Interactive Competency Map
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ebony/75">
            Explore the core learning competencies. Select a node to uncover
            focus areas and behavioral examples that support growth.
          </p>
        </section>
        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-start md:gap-14">
          <RadialMap
            activeId={selectedCompetency?.id ?? null}
            onSelect={handleSelect}
          />
          <div className="relative flex w-full max-w-md justify-center">
            <div
              className={`hidden w-full max-w-md rounded-3xl border border-gold/40 bg-white/95 p-8 text-left text-base text-ebony/70 shadow-xl transition-opacity duration-300 ease-out md:flex md:flex-col ${placeholderVisibility}`}
              aria-hidden={Boolean(selectedCompetency)}
            >
              <div className="space-y-3 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue/70">
                  Competency
                </p>
                <h2 className="text-2xl font-semibold text-ebony">
                  Interactive Guidance
                </h2>
                <p className="leading-relaxed text-ebony/75">
                  Select a competency to learn more.
                </p>
                <p className="text-sm text-ebony/60">
                  Details and behavioral examples will appear in this panel.
                </p>
              </div>
            </div>
            <InfoPanel
              competency={selectedCompetency}
              onClose={() => setSelectedCompetency(null)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
