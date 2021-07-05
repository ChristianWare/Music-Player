import React from "react";
import styled from "styled-components";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    // Add active state
    const newSongs = songs.map((song) => {
      if(song.id === id){
        return{
          ...song, 
          active: true,
        }
      }else{
        return{
          ...song,
          active:false,
        }
      }
    })
    setSongs(newSongs)
    // check if song is playing
    playAudio(isPlaying, audioRef)
  };
  return (
    <LibrarySongContainer 
    onClick={songSelectHandler} 
    className={`library-song ${song.active ? 'selected' : ''}`}>
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