// import logo from "./logo.svg";
import Home from "./page/Home.page.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import PlayListByCategory from "./components/Home.Page.Components/PlayListByCategory.tsx";
import PlayTrack from "./components/Home.Page.Components/PlayTrack.tsx";
import TrackByPlaylistId from "./components//Home.Page.Components/TrackByPlaylistId.tsx";

function App() {
  return (
    <div className="App">
      {/* <Switch> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<PlayListByCategory />}></Route>
        <Route path="/playlist/:id" element={<TrackByPlaylistId />} />
        <Route path="/playtrack/:id" element={<PlayTrack />} />
      </Routes>

      {/* </Switch> */}
    </div>
  );
}

export default App;
