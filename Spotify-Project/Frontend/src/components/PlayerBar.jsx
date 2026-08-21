import { Play, Pause } from 'lucide-react'
import { usePlayer } from '../context/PlayerContext'

function formatTime(t) {
  if (!t || Number.isNaN(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function PlayerBar() {
  const { current, isPlaying, progress, duration, togglePlay, seek } = usePlayer()

  if (!current) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-bg hover:bg-accent-hover"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-medium">{current.title}</p>
            {isPlaying && (
              <span className="flex items-end gap-0.5">
                <span className="eq-bar w-0.5 bg-accent" style={{ animationDelay: '0ms' }} />
                <span className="eq-bar w-0.5 bg-accent" style={{ animationDelay: '150ms' }} />
                <span className="eq-bar w-0.5 bg-accent" style={{ animationDelay: '300ms' }} />
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>{formatTime(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              className="h-1 flex-1 cursor-pointer accent-accent"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}