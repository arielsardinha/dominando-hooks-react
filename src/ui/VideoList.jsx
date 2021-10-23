import { useContext, useMemo } from "react";
import { videoStore } from "../data/video/VideoContext";
import Video from "./Video";

export default function VideoList() {
  const [videoState, videoDispatch] = useContext(videoStore),
    listVideo = useMemo(() => {
      function onClick(video) {
        videoDispatch({ type: "select", value: video });
      }
      return videoState.videos.map((item) => (
        <Video key={item.url} video={item} onClick={onClick} />
      ));
    }, [videoState.video, videoDispatch]);

  return <ul className="list">{listVideo}</ul>;
}
