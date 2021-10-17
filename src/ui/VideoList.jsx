import { useContext } from "react";
import { videoStore } from "../data/video/VideoContext";
import Video from "./Video";

export default function VideoList() {
  const [videoState, videoDispatch] = useContext(videoStore);
  function onClick(video) {
    videoDispatch({ type: "select", value: video });
  }

  return (
    <ul className="list">
      {videoState.videos.map((item) => (
        <Video key={item.url} video={item} onClick={onClick} />
      ))}
    </ul>
  );
}
