import React from 'react';
import './SongList.css';

const songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1' },
  { id: 2, title: 'Song 2', artist: 'Artist 2' },
  { id: 3, title: 'Song 3', artist: 'Artist 3' },
];

const SongList = () => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <div key={song.id} className="song">
          <p>{song.title} - {song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default SongList;
