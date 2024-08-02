import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/Musicplayer';
import SongList from './components/SongList';
import SearchBar from './components/SearchBar';
import SongDetails from './components/SongDetails';
import { fetchSongs } from './api/songs';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    fetchSongs().then(function (data) {
      setSongs(data);
      setFilteredSongs(data);
    });
  }, []);

  const handleSearch = (query) => {
    const results = songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(results);
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <SearchBar onSearch={handleSearch} />
      <SongDetails song={selectedSong} />
      <SongList songs={filteredSongs} onSongSelect={handleSongSelect} />
      <MusicPlayer song={selectedSong} />
    </div>
  );
}

export default App;
