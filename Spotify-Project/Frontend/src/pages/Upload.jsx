import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadCloud } from 'lucide-react'
import api from '../api/axios'

export default function Upload() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!file) return setError('Choose an audio file to upload.')
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('music', file)
      await api.post('/music/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="font-display text-2xl font-bold">Upload a track</h1>
        <p className="mt-1 text-sm text-text-muted">Share a new song with your listeners.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-text-muted">Track title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-surface px-4 py-8 text-center hover:border-accent">
          <UploadCloud className="h-6 w-6 text-text-muted" />
          <span className="text-sm text-text-muted">
            {file ? file.name : 'Click to choose an audio file'}
          </span>
          <input
            required
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <button
          disabled={loading}
          className="mt-2 rounded-lg bg-accent py-2.5 text-sm font-semibold text-bg hover:bg-accent-hover disabled:opacity-60"
        >
          {loading ? 'Uploading…' : 'Upload track'}
        </button>
      </form>
    </div>
  )
}