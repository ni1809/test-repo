import React from 'react';
import './SongDetails.css';

const SongDetails = ({ song }) => {
  if (!song) {
    return <div className="song-details">Select a song to see details</div>;
  }

  return (
    <div className="song-details">
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

export default SongDetails;
