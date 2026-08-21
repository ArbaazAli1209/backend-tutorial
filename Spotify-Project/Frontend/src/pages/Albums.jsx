import { useEffect, useState } from 'react'
import api from '../api/axios'
import AlbumCard from '../components/AlbumCard'

export default function Albums() {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/music/albums')
      .then(({ data }) => setAlbums(data.albums))
      .catch(() => setError('Could not load albums.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 pb-28">
      <h1 className="font-display text-2xl font-bold">Albums</h1>
      <p className="mt-1 text-sm text-text-muted">Full collections from your favorite artists.</p>

      {loading && <p className="mt-8 text-sm text-text-muted">Loading…</p>}
      {error && <p className="mt-8 text-sm text-red-400">{error}</p>}
      {!loading && !error && albums.length === 0 && (
        <p className="mt-8 text-sm text-text-muted">No albums yet.</p>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {albums.map((album) => (
          <AlbumCard key={album._id} album={album} />
        ))}
      </div>
    </div>
  )
}