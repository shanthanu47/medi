import useTimer from "./hooks/useTImer";
import "./timer.css";

const TimerPage = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return (
      <div className="timerTimeContainer">
        <div className="text">{`${getHours}`}</div>
        <div className="separator">:</div>
        <div className="text">{`${getMinutes}`}</div>
        <div className="separator">:</div>
        <div className="text">{`${getSeconds}`}</div>
      </div>
    );
  };

  return (
    <div className="timerContainer">
      <div className="timerOutline">
        <div className="meditationImgContainer">
          <img src="./images/image.svg" />
        </div>
        {formatTime(timer)}
        <div className="buttonContainer">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}

          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
