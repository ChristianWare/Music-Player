import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
  return (
    <>
      <SongContainer>
        <img alt={currentSong.name} src={currentSong.cover} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </SongContainer>
    </>
  );
};

export default Song;

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    border-radius: 50%;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 60%;
    }
  }
`;

