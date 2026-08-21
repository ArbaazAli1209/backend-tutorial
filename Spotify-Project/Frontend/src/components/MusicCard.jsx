import { Play, Pause } from 'lucide-react'
import { usePlayer } from '../context/PlayerContext'

export default function MusicCard({ track }) {
  const { current, isPlaying, playTrack } = usePlayer()
  const active = current?._id === track._id

  return (
    <button
      onClick={() => playTrack(track)}
      className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-4 text-left transition-colors hover:bg-surface-hover"
    >
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-linear-to-br from-accent/25 to-secondary/25">
        {active && isPlaying ? (
          <Pause className="h-8 w-8 text-accent" />
        ) : (
          <Play className="h-8 w-8 text-text-muted transition-colors group-hover:text-accent" />
        )}
      </div>
      <div className="w-full">
        <p className="truncate font-display font-semibold">{track.title}</p>
        <p className="truncate text-xs text-text-muted">{track.artist?.username || 'Unknown artist'}</p>
      </div>
    </button>
  )
}