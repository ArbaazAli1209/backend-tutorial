import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function CreateAlbum() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [musics, setMusics] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/music').then(({ data }) => setMusics(data.musics)).catch(() => {})
  }, [])

  function toggle(id) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await api.post('/music/album', { title, musics: selected })
      navigate('/albums')
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create album.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="font-display text-2xl font-bold">Create an album</h1>
        <p className="mt-1 text-sm text-text-muted">Group your tracks into a collection.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-text-muted">Album title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-text-muted">Tracks</label>
          <div className="flex max-h-56 flex-col divide-y divide-border overflow-y-auto rounded-lg border border-border bg-surface">
            {musics.length === 0 && <p className="p-3 text-sm text-text-muted">No tracks available yet.</p>}
            {musics.map((track) => (
              <label key={track._id} className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-surface-hover">
                <input
                  type="checkbox"
                  checked={selected.includes(track._id)}
                  onChange={() => toggle(track._id)}
                  className="accent-accent"
                />
                {track.title}
              </label>
            ))}
          </div>
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <button
          disabled={loading}
          className="mt-2 rounded-lg bg-accent py-2.5 text-sm font-semibold text-bg hover:bg-accent-hover disabled:opacity-60"
        >
          {loading ? 'Creating…' : 'Create album'}
        </button>
      </form>
    </div>
  )
}