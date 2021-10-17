import { createContext, useReducer } from "react";
import { videoInicialState, videoReducer } from "./VideoReducer";

export const videoStore = createContext(videoInicialState),
  { Provider } = videoStore;

export default function VideoContext(props) {
  const [state, dispatch] = useReducer(videoReducer, videoInicialState);
  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
}
