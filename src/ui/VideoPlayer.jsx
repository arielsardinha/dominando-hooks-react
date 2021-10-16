import { useEffect, useRef, useState } from "react";
import { TimeService } from "../data/services/TimeServices";

const _selectedVideo = {
  id: 2,
  title: "olho",
  duration: 10,
  url: "https://cdn.videvo.net/videvo_files/video/premium/getty_56/small_watermarked/istock-654264468_preview.webm",
  cover:
    "https://images.freeimages.com/images/small-previews/322/indian-heads-1391201.jpg",
};

export default function VideoPlayer() {
  const video = _selectedVideo,
    videoRef = useRef(),
    progressTimer = useRef(),
    [isPlaying, setPlay] = useState(false),
    [progress, setProgress] = useState(0);

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
              {TimeService.formatTime(Math.round(progress))} /
              {TimeService.formatTime(video.duration)}
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
