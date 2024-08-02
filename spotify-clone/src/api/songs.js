const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', album: 'Album 1', duration: '3:45' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2', duration: '4:05' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', album: 'Album 3', duration: '2:30' },
  ];
  
  export const fetchSongs = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(songs);
      }, 1000);
    });
  };
  