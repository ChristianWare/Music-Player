import React, { useState, useRef } from "react";
import "./styles/app.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
import { motion } from "framer-motion"; 


function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      <div className='App'>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </motion.div>
  );
}

export default App;
