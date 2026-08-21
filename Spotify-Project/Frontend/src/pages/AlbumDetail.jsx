import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Play, Pause } from 'lucide-react'
import api from '../api/axios'
import { usePlayer } from '../context/PlayerContext'

export default function AlbumDetail() {
  const { albumId } = useParams()
  const [album, setAlbum] = useState(null)
  const [error, setError] = useState('')
  const { current, isPlaying, playTrack } = usePlayer()

  useEffect(() => {
    api.get(`/music/albums/${albumId}`)
      .then(({ data }) => setAlbum(data.album))
      .catch(() => setError('Could not load this album.'))
  }, [albumId])

  if (error) return <p className="mx-auto max-w-6xl px-6 py-10 text-sm text-red-400">{error}</p>
  if (!album) return <p className="mx-auto max-w-6xl px-6 py-10 text-sm text-text-muted">Loading…</p>

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 pb-28">
      <Link to="/albums" className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text">
        <ArrowLeft className="h-4 w-4" /> Back to albums
      </Link>

      <div className="mt-6">
        <h1 className="font-display text-3xl font-bold">{album.title}</h1>
        <p className="mt-1 text-sm text-text-muted">{album.artist?.username}</p>
      </div>

      <div className="mt-8 flex flex-col divide-y divide-border rounded-xl border border-border bg-surface">
        {album.musics?.length === 0 && (
          <p className="p-4 text-sm text-text-muted">This album has no tracks yet.</p>
        )}
        {album.musics?.map((track, i) => {
          const active = current?._id === track._id
          return (
            <button
              key={track._id}
              onClick={() => playTrack(track)}
              className="flex items-center gap-4 px-4 py-3 text-left hover:bg-surface-hover"
            >
              <span className="w-5 text-sm text-text-muted">
                {active && isPlaying ? <Pause className="h-4 w-4 text-accent" /> : i + 1}
              </span>
              <span className={`flex-1 truncate text-sm ${active ? 'text-accent' : ''}`}>{track.title}</span>
              <Play className="h-4 w-4 text-text-muted" />
            </button>
          )
        })}
      </div>
    </div>
  )
}