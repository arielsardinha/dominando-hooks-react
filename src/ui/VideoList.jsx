import Video from "./Video";

const _list = [
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
];

export default function VideoList() {
  function onClick(video) {
    console.log(video);
  }

  return (
    <ul className="list">
      {_list.map((item) => (
        <Video key={item.id} video={item} onClick={onClick} />
      ))}
    </ul>
  );
}
