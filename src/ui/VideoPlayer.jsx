import { useEffect, useRef, useState, useContext, useMemo } from "react";
import { TimeService } from "../data/services/TimeServices";
import { videoStore } from "../data/video/VideoContext";

export default function VideoPlayer() {
  const [videoState] = useContext(videoStore),
    video = videoState.selectedVideo,
    videoRef = useRef(),
    progressTimer = useRef(),
    [isPlaying, setPlay] = useState(false),
    [progress, setProgress] = useState(0),
    totalTime = useMemo(() => TimeService.formatTime(video.duration), [video]);

  useEffect(() => {
    // ? pega o html video como referencia e adciona os eventos ao mesmo
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", play);
    videoElement.addEventListener("pause", pause);
    videoElement.addEventListener("seeked", onProgress);
    setTime(0);
    pause();
    return () => {
      // ? remove os eventos quando o elemento nao form existir mais
      videoElement.removeEventListener("play", play);
      videoElement.removeEventListener("pause", pause);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [video]);

  useEffect(() => {
    // ? limpa o setInterval
    clearImmediate(progressTimer.current);
    if (isPlaying) {
      // ? cria um novo interval
      progressTimer.current = setInterval(onProgress, 1000);
    }
  }, [isPlaying]);

  function play() {
    videoRef.current.play();
    setPlay(true);
  }

  function pause() {
    videoRef.current.pause();
    setPlay(false);
  }

  function onProgress() {
    setProgress(videoRef.current.currentTime);
  }

  function onChangeProgress(event) {
    setTime(event.target.value);
  }

  function setTime(time) {
    videoRef.current.currentTime = time;
    onProgress();
  }

  return (
    <div className="video-player">
      <video src={video.url} ref={videoRef} />
      {video.url && (
        <>
          <div className="controls">
            <button onClick={isPlaying ? pause : play}>
              {isPlaying ? "||" : "|>"}
            </button>
            <span>
              {TimeService.formatTime(Math.round(progress))} /{totalTime}
            </span>
            <input
              type="range"
              value={progress}
              min={0}
              max={video.duration}
              step={0.1}
              onChange={onChangeProgress}
            />
          </div>
        </>
      )}

      <h2>{video.title}</h2>
    </div>
  );
}
