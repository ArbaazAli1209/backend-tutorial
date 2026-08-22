import { Link, NavLink } from 'react-router-dom'
import { Disc3, LogOut, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { usePlayer } from '../context/PlayerContext'

export default function Navbar() {
  const { user, logout, isArtist } = useAuth()
  const { stop } = usePlayer()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-muted hover:text-text'}`

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <Disc3 className="h-6 w-6 text-accent" strokeWidth={1.5} />
          Spotify Artist
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={linkClass} end>Tracks</NavLink>
          <NavLink to="/albums" className={linkClass}>Albums</NavLink>
          {isArtist && <NavLink to="/upload" className={linkClass}>Upload</NavLink>}
          {isArtist && <NavLink to="/albums/new" className={linkClass}>New album</NavLink>}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-text-muted sm:flex">
                <User className="h-3.5 w-3.5" />
                {user.username} · {user.role}
              </span>
              <button
                onClick={() => { stop(); logout(); }}
                className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-surface-hover hover:text-text"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-text-muted hover:text-text">Login</Link>
              <Link to="/register" className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-bg hover:bg-accent-hover">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}