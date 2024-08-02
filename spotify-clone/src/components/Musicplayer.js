import React, { useState } from 'react';
import './Musicplayer.css';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="player-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button>Next</button>
      </div>
      {song && (
        <div className="current-song">
          <p>{song.title} - {song.artist}</p>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;

