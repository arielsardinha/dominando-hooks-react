import { createContext } from "react";

const _state = {
  selectedVideo: {
    id: 2,
    title: "olho",
    duration: 10,
    url: "https://cdn.videvo.net/videvo_files/video/premium/getty_56/small_watermarked/istock-654264468_preview.webm",
    cover:
      "https://images.freeimages.com/images/small-previews/322/indian-heads-1391201.jpg",
  },
  videos: [
    {
      id: 2,
      title: "olho",
      duration: 10,
      url: "https://cdn.videvo.net/videvo_files/video/premium/getty_56/small_watermarked/istock-654264468_preview.webm",
      cover:
        "https://images.freeimages.com/images/small-previews/322/indian-heads-1391201.jpg",
    },
    {
      id: 5,
      title: "olho",
      duration: 10,
      url: "https://cdn.videvo.net/videvo_files/video/premium/getty_56/small_watermarked/istock-654264468_preview.webm",
      cover:
        "https://images.freeimages.com/images/small-previews/322/indian-heads-1391201.jpg",
    },
    {
      id: 8,
      title: "olho",
      duration: 10,
      url: "https://cdn.videvo.net/videvo_files/video/premium/getty_56/small_watermarked/istock-654264468_preview.webm",
      cover:
        "https://images.freeimages.com/images/small-previews/322/indian-heads-1391201.jpg",
    },
  ],
};

export const videoStore = createContext(_state),
  { Provider } = videoStore;

export default function VideoContext(props) {
    return(
        <Provider value={[_state]}>{props.children}</Provider>
    )
}
