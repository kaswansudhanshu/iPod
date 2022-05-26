import React, { useEffect, useState } from "react";
// songs to be played
// eslint-disable-next-line
import { pasoori, i_love_u, as_it_was, first_class } from "./index";

let updateTimer;

let curr_track = document.createElement("audio"); //Create a new html Audio element

export function MusicPlayer(props) {
  const [curr_time, setCurrTime] = useState("00:00");
  const [total_duration, setTotalDuration] = useState("00:00");
  const [seek_slider, setSeekSlider] = useState(0);

  const { songList, songIndex, playerVisible, isPlaying } = props;
  const songPlaying = songList[songIndex];

  useEffect(() => {
    //Load the default first track
    loadTrack(songIndex);
    // eslint-disable-next-line
  }, [songIndex]);

  useEffect(() => {
    if (!isPlaying) {
      curr_track.pause();
      // clearInterval(updateTimer);
    } else {
      curr_track.play();
      // updateTimer = setInterval(seekUpdate, 1000);
    }
  }, [isPlaying]);

  function loadTrack(songIndex) {
    clearInterval(updateTimer);
    resetValues();

    //change the source of song
    curr_track.src = songList[songIndex].songUrl;
    curr_track.load();

    //start the seeker and update duration
    updateTimer = setInterval(seekUpdate, 1000);
  }

  //Resets the values of previous song played
  function resetValues() {
    setCurrTime("00:00");
    setTotalDuration("00:00");
    setSeekSlider(0);
  }

  function seekUpdate() {
    let seekPosition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
      setSeekSlider(seekPosition);

      // Calculate the time left and the total duration
      let currentMinutes = Math.floor(curr_track.currentTime / 60);
      let currentSeconds = Math.floor(
        curr_track.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(curr_track.duration / 60);
      let durationSeconds = Math.floor(
        curr_track.duration - durationMinutes * 60
      );

      // Add a zero to the single digit time values
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
      }

      // Display the updated duration
      let curr_time_duration = currentMinutes + ":" + currentSeconds;
      setCurrTime(curr_time_duration);
      let total_duration_value = durationMinutes + ":" + durationSeconds;
      setTotalDuration(total_duration_value);

      if (curr_track.duration === curr_track.currentTime) props.songEnded();
    }
  }

  return (
    <div
      className="audio-player"
      style={{ visibility: `${playerVisible ? "visible" : "hidden"}` }}
    >
      <div className="details">
        <div className="about-track">
          <div className="track-name">{songPlaying.title}</div>
          <span> - </span>
          <div className="track-artist">{songPlaying.artist}</div>
        </div>
        <div
          className="track-cover"
          style={{
            backgroundImage: `url(${songPlaying.songImg})`,
          }}
        ></div>
      </div>

      <div className="slider-container">
        <div className="current-time">{curr_time}</div>
        <input
          type="range"
          min="1"
          max="100"
          value={seek_slider}
          className="seek-slider"
          onChange={seekUpdate}
        />

        <div className="total-duration">{total_duration}</div>
      </div>
    </div>
  );
}
