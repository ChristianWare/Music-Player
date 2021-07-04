import React from "react";
import styled from "styled-components";

const Song = () => {
  return (
    <>
      <SongContainer>
        <h1>Picture</h1>
        <h1>Song Name</h1>
        <h1>Artist</h1>
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
`;