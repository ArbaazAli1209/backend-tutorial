import { useEffect, useState } from 'react'
import api from '../api/axios'
import MusicCard from '../components/MusicCard'

export default function Home() {
  const [musics, setMusics] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/music')
      .then(({ data }) => setMusics(data.musics))
      .catch(() => setError('Could not load tracks.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 pb-28">
      <h1 className="font-display text-2xl font-bold">Latest tracks</h1>
      <p className="mt-1 text-sm text-text-muted">Freshly uploaded, straight from artists.</p>

      {loading && <p className="mt-8 text-sm text-text-muted">Loading…</p>}
      {error && <p className="mt-8 text-sm text-red-400">{error}</p>}
      {!loading && !error && musics.length === 0 && (
        <p className="mt-8 text-sm text-text-muted">No tracks yet. Check back soon.</p>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {musics.map((track) => (
          <MusicCard key={track._id} track={track} />
        ))}
      </div>
    </div>
  )
}