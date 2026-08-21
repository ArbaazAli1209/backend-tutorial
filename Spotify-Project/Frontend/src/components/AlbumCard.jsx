import { Link } from 'react-router-dom'
import { Library } from 'lucide-react'

export default function AlbumCard({ album }) {
  return (
    <Link
      to={`/albums/${album._id}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-hover"
    >
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-linear-to-br from-secondary/25 to-accent/15">
        <Library className="h-8 w-8 text-text-muted transition-colors group-hover:text-secondary" />
      </div>
      <div>
        <p className="truncate font-display font-semibold">{album.title}</p>
        <p className="truncate text-xs text-text-muted">{album.artist?.username || 'Unknown artist'}</p>
      </div>
    </Link>
  )
}