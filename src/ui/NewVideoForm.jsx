import { useState } from "react";

export default function NewVideoFom() {
  const [title, setTitle] = useState(""),
    [duration, setDuration] = useState(""),
    [url, setUrl] = useState(""),
    [cover, setCover] = useState("");

  function save() {
    const newVideo = {
      title,
      duration,
      url,
      cover,
    };
    reset();
  }

  function reset() {
    setTitle("");
    setDuration("");
    setUrl("");
    setCover("");
  }

  return (
    <div className="form">
      <label>Título:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label>Título:</label>
      <input
        type="text"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
      />

      <label>Título:</label>
      <input
        type="text"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />

      <label>Título:</label>
      <input
        type="text"
        value={cover}
        onChange={(event) => setCover(event.target.value)}
      />

      <button onClick={save}>Salvar</button>
    </div>
  );
}
