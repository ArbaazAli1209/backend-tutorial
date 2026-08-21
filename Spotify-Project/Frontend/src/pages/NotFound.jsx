import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-accent">404</h1>
      <p className="text-sm text-text-muted">This page doesn't exist.</p>
      <Link to="/" className="mt-2 text-sm text-accent hover:underline">Back home</Link>
    </div>
  )
}