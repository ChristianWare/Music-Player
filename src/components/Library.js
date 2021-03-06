import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <LibraryContainer>
      <h2>Library</h2>
      <LibrarySongs>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </LibrarySongs>
    </LibraryContainer>
  );
};

export default Library;

const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  background: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  /* transform: translateX(-100%); */
  transition: all 0.5s ease;
  opacity: 1;

  h2 {
    padding: 2rem;
  }

`;

const LibrarySongs = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
`;
