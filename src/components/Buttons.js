const Buttons = (props) => {
  const {
    deviceTheme,
    showMenu,
    handleMenu,
    playpauseTrack,
    prevTrack,
    nextTrack,
  } = props;

  return (
    <div className="buttons">
      {/* Wheel used for navigation through menu */}
      <div
        className="rotatable"
        id="rotatable"
        style={{ background: `${deviceTheme}` }}
      ></div>

      <div className="buttons-container">
        <button type="button" id="menu-btn" onClick={showMenu}>
          Menu
        </button>

        <div className="center-btns">
          {/* play previous Song */}
          <button type="button" id="backward" onClick={prevTrack}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/39/39712.png"
              alt="previous"
            />
          </button>

          {/* Selector button */}
          <button type="button" id="select" onClick={handleMenu}></button>

          {/* play next song */}
          <button type="button" id="forward" onClick={nextTrack}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/660/660276.png"
              alt="next"
            />
          </button>
        </div>

        {/* Play Pause Song */}
        <button type="button" id="play-pause" onClick={playpauseTrack}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="play-pause"
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
