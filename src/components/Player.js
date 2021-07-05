import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo }) => {
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

  // State
 

  return (
    <>
      <PlayerContainer>
        <TimeControl>
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type='range'
          />
          <p>{getTime(songInfo.duration)}</p>
        </TimeControl>
        <PlayControls>
          <SkipBack>
            <FontAwesomeIcon
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
  }
  p {
    padding: 1rem;
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
