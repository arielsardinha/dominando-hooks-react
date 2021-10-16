import './App.css';
import VideoContext from './data/video/VideoContext';
import NewVideoFom from './ui/NewVideoForm';
import VideoList from './ui/VideoList';
import VideoPlayer from './ui/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoContext>
        <VideoList />
        <VideoPlayer />
        <NewVideoFom />
      </VideoContext>
    </div>
  );
}

export default App;
