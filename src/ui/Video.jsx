import { TimeService } from "../data/services/TimeServices";

export default function Video(props) {
  const video = props.video || {},
    onClick = props.onClick || {};

  return (
    <li onClick={() => onClick(video)}>
      <img src={video.cover} alt={video.title} />
      <span>{TimeService.formatTime(video.duration)}</span>
      <h2>{video.title}</h2>
    </li>
  );
}
