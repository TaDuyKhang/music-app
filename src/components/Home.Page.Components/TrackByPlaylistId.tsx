import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetTrackByCategoriesById } from "../../requests.js";
import { useSelector, useDispatch } from "react-redux";
import { setTracksList, setType } from "../../store/slice/slice.js";
import "../../css/TrackByPlaylistId.scss";

export default function TrackByPlaylistId() {
  const [trackList, setTrackList] = useState();
  const token = useSelector((state) => state.slice.token);
  // const id = "37i9dQZF1DXafb0IuPwJyF";
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    GetTrackByCategoriesById.getTrackByCategoriesById(
      `https://api.spotify.com/v1/playlists/${id}`,
      token
    ).then((res) => {
      setTrackList(res.data);
      dispatch(setTracksList(res.data.tracks.items));
    });
  }, []);

  return (
    <div className="list--tracks">
      <h1>{trackList?.name}</h1>
      <h3>{trackList?.description}</h3>

      {trackList?.tracks.items.map((item, index) => (
        <Link
          onClick={() => dispatch(setType("category"))}
          to={"/playtrack/" + item?.track?.id}
          className="item"
          key={index}
        >
          <p className="name">{item?.track?.name}</p>
          <p className="artists">artists: {item?.track?.artists[0].name}</p>
        </Link>
      ))}
    </div>
  );
}
