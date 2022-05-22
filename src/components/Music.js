import React from "react";
// songs to be played
// eslint-disable-next-line
import { pasoori, i_love_u, as_it_was, first_class } from "./index";

let updateTimer, seek_slider, curr_time, total_duration, curr_song_playing;

let curr_track = document.createElement("audio"); //Create a new html Audio element

export class MusicPlayer extends React.Component {
  componentDidMount() {
    //select the elements after they are created in DOM
    seek_slider = document.querySelector(".seek-slider");
    curr_time = document.querySelector(".current-time");
    total_duration = document.querySelector(".total-duration");

    const { songIndex } = this.props;
    curr_song_playing = songIndex;

    //Load the default first track
    this.loadTrack(songIndex);
  }

  componentDidUpdate() {
    const { isPlaying, songIndex } = this.props;

    // Check if the song playing is changed
    if (songIndex !== curr_song_playing) {
      this.loadTrack(songIndex);
      curr_song_playing = songIndex;
    }
    // Play song if selected from the songs menu
    // Play/Pause if the play/pause button is clicked
    if (!isPlaying) {
      curr_track.pause();
    } else {
      curr_track.play();
    }
  }

  //Load track onto the player
  // render the duration details
  loadTrack = (songIndex) => {
    const { songList } = this.props;
    clearInterval(updateTimer);
    this.resetValues();

    //change the source of song
    curr_track.src = songList[songIndex].songUrl;
    curr_track.load();

    //start the seeker and update duration
    updateTimer = setInterval(this.seekUpdate, 1000);
  };

  //Resets the values of previous song played
  resetValues = () => {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
  };

  //update the seeker to current time of song
  seekUpdate = () => {
    let seekPosition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
      seek_slider.value = seekPosition;

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
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;

      if (curr_track.duration === curr_track.currentTime)
        this.props.songEnded();
    }
  };

  render() {
    const { songList, songIndex, playerVisible } = this.props;
    const songPlaying = songList[songIndex];
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
          <div className="current-time">00:00</div>
          <input
            type="range"
            min="1"
            max="100"
            value="1"
            className="seek-slider"
            onChange={this.seekUpdate}
          />

          <div className="total-duration">00:00</div>
        </div>
      </div>
    );
  }
}
