import './App.css';
import NewVideoFom from './ui/NewVideoForm';
import VideoList from './ui/VideoList';
import VideoPlayer from './ui/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoList />
      <VideoPlayer />
      <NewVideoFom />
    </div>
  );
}

export default App;
