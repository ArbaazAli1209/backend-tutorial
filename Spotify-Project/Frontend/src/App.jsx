import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PlayerBar from './components/PlayerBar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Albums from './pages/Albums'
import AlbumDetail from './pages/AlbumDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'
import CreateAlbum from './pages/CreateAlbum'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/albums" element={<ProtectedRoute><Albums /></ProtectedRoute>} />
        <Route path="/albums/new" element={<ProtectedRoute artistOnly><CreateAlbum /></ProtectedRoute>} />
        <Route path="/albums/:albumId" element={<ProtectedRoute><AlbumDetail /></ProtectedRoute>} />
        <Route path="/upload" element={<ProtectedRoute artistOnly><Upload /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PlayerBar />
    </div>
  )
}