import React from "react";
import pasoori from "./songs/pasoori.mp3";
import i_love_u from "./songs/i_love_you.mp3";
import as_it_was from "./songs/as_it_was.mp3";
import first_class from "./songs/first_class.mp3";

let updateTimer, seek_slider, curr_time, total_duration;
let curr_track = document.createElement("audio");
let curr_song_playing;

export class MusicPlayer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    seek_slider = document.querySelector(".seek-slider");
    curr_time = document.querySelector(".current-time");
    total_duration = document.querySelector(".total-duration");
    const { songIndex } = this.props;
    curr_song_playing = songIndex;
    this.loadTrack(songIndex);
  }

  componentDidUpdate() {
    const { isPlaying, songIndex } = this.props;
    if (songIndex !== curr_song_playing) {
      this.loadTrack(songIndex);
      curr_song_playing = songIndex;
    }
    if (!isPlaying) {
      curr_track.pause();
    } else {
      curr_track.play();
    }
  }

  loadTrack = (songIndex) => {
    const { songList } = this.props;
    clearInterval(updateTimer);
    this.resetValues();

    curr_track.src = songList[songIndex].songUrl;
    curr_track.load();
    updateTimer = setInterval(this.seekUpdate, 1000);
  };

  resetValues = () => {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
  };

  seekUpdate = () => {
    let seekPosition = 0;
    // console.log("seeked");
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
