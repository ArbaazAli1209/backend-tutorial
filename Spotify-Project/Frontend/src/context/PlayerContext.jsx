import { createContext, useContext, useRef, useState, useEffect } from 'react'

const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
  const audioRef = useRef(new Audio())
  const [current, setCurrent] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    const onTime = () => setProgress(audio.currentTime)
    const onLoaded = () => setDuration(audio.duration || 0)
    const onEnd = () => setIsPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  function playTrack(track) {
    const audio = audioRef.current
    if (current?._id === track._id) {
      togglePlay()
      return
    }
    audio.src = track.uri
    audio.play()
    setCurrent(track)
    setIsPlaying(true)
  }

  function togglePlay() {
    const audio = audioRef.current
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  function seek(time) {
    audioRef.current.currentTime = time
    setProgress(time)
  }

  return (
    <PlayerContext.Provider value={{ current, isPlaying, progress, duration, playTrack, togglePlay, seek }}>
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}