import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setSongs, setCurrentSong }) => {
  // useEffect 
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  },  [currentSong])
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };


  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
     let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     if(direction === 'skipForward') {
       setCurrentSong(songs[(currentIndex + 1) % songs.length])
     }
     if(direction ==='skipBack'){
       if((currentIndex -1) % songs.length === -1 ){
         setCurrentSong(songs[songs.length - 1]);
         playAudio(isPlaying, audioRef);
         return;
       }
       setCurrentSong(songs[(currentIndex - 1) % songs.length]); 
     }
     playAudio(isPlaying, audioRef)
  }

  return (
    <>
      <PlayerContainer>
        <TimeControl>
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type='range'
          />
          <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
        </TimeControl>
        <PlayControls>
          <SkipBack>
            <FontAwesomeIcon
              onClick={() => skipTrackHandler("skipBack")}
              className='skipBack'
              size='2x'
              icon={faAngleLeft}
            />
          </SkipBack>
          <Play>
            <FontAwesomeIcon
              onClick={playSongHandler}
              className='play'
              size='2x'
              icon={isPlaying ? faPause : faPlay}
            />
          </Play>
          <SkipForward>
            <FontAwesomeIcon
              onClick={() => skipTrackHandler("skipForward")}
              className='skipForward'
              size='2x'
              icon={faAngleRight}
            />
          </SkipForward>
        </PlayControls>
      </PlayerContainer>
    </>
  );
};

export default Player;

const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled.div`
  width: 50%;
  display: flex;

  input {
    width: 100%;
    padding: 1rem 0rem;
    --webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  p {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const PlayControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;

  svg {
    cursor: pointer;
  }
`;

const Play = styled.span``;

const SkipBack = styled.span``;

const SkipForward = styled.span``;
