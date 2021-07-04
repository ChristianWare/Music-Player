import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <>
      <PlayerContainer>
        <TimeControl>
          <p>Start Time</p>
          <input type='range' />
          <p>End Time</p>
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
            <FontAwesomeIcon className='play' size='2x' icon={faPlay} />
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

  input{
      width: 100%;
      padding: 1rem 2rem;
  }
  p{
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
