import React from "react";
import styled from "styled-components";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    // audioRef.current.play();
    // check if song is playing
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play();
        })
      }
    }
  };
  return (
    <LibrarySongContainer onClick={songSelectHandler}>
      <img alt={song.name} src={song.cover} />
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongContainer>
  );
};

export default LibrarySong;

const LibrarySongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;

  img {
    width: 30%;
  }
  &:hover {
    background: rgb(222, 222, 255);
  }
`;


const SongDescription = styled.div`
  padding-left:  1rem;
  
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.7rem;
  }
`;