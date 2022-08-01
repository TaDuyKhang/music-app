import Home from "./page/Home.page.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PlayListByCategory from "./components/Home.Page.Components/PlayListByCategory.tsx";
import PlayTrack from "./components/Home.Page.Components/PlayTrack.tsx";
import TrackByPlaylistId from "./components/Home.Page.Components/TrackByPlaylistId.tsx";
import { useEffect } from "react";
import Nav from "./components/Nav.tsx";
import Search from "./components/Search.tsx";
import User from "./components/user.tsx";
import { setToken } from "./store/slice/slice.js";
import { useDispatch } from "react-redux";
import { Spotify } from "./requests.js";
import Audio from "./components/Home.Page.Components/AudioPlayer.tsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    Spotify.getAccessToken().then((data) => {
      dispatch(setToken(data.data.access_token));
    });
  }, []);
  return (
    <div className="App">
      <div className="audio">
        <Audio />
      </div>
      <Nav />

      <div style={{ marginBottom: 163 }}>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />
          <Route path="/musical-note" element={<User />} />
          <Route path="/user" element={<User />} />

          <Route path="category/:id" element={<PlayListByCategory />}></Route>
          <Route path="/playlist/:id" element={<TrackByPlaylistId />} />
          <Route path="/playtrack/:id" element={<PlayTrack />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
