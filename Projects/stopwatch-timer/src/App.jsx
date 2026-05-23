import Button from './Components/Button'
import Display from './Components/Display'
import useStopwatch from './hooks/useStopwatch'
import { formatTime } from './utils/formatTime'

function App() {
  const { time, isRunning, laps, start, pause, reset, lap } = useStopwatch()
  const formattedTime = formatTime(time)

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%),linear-gradient(180deg,#050816_0%,#090e1f_100%)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-10">
        <section className="relative w-full max-w-3xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
                Stopwatch
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                Timed with precision
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Start, pause, reset, and capture laps without leaving the screen.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-inner shadow-black/40 md:px-10 md:py-12">
            <Display time={formattedTime} />

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button onClick={isRunning ? pause : start} variant={isRunning ? 'pause' : 'start'}>
                {isRunning ? 'Pause' : 'Start'}
              </Button>
              <Button onClick={lap} disabled={!isRunning || time === 0} variant="lap">
                Lap
              </Button>
              <Button onClick={reset} disabled={time === 0 && laps.length === 0} variant="reset">
                Reset
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-100">Laps</h2>
              <span className="text-sm text-slate-400">{laps.length} recorded</span>
            </div>

            {laps.length > 0 ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {laps.map((lapTime, index) => {
                  const lapLabel = laps.length - index
                  const formattedLap = formatTime(lapTime)

                  return (
                    <li
                      key={`${lapTime}-${index}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                          Lap {lapLabel}
                        </span>
                        <span className="font-mono text-lg text-white">
                          {formattedLap.hours}:{formattedLap.minutes}:{formattedLap.seconds}
                          <span className="ml-1 text-sm text-slate-400">
                            {formattedLap.milliseconds}
                          </span>
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-400">
                No laps yet. Press Lap while the stopwatch is running.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
