import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetTrackByCategoriesById } from "../../requests.js";
import { useSelector } from "react-redux";
import "../../css/TrackByPlaylistId.scss";

export default function TrackByPlaylistId() {
  const [trackList, setTrackList] = useState();
  const token = useSelector((state) => state.slice.token);
  // const id = "37i9dQZF1DXafb0IuPwJyF";
  let { id } = useParams();

  useEffect(() => {
    GetTrackByCategoriesById.getTrackByCategoriesById(
      `https://api.spotify.com/v1/playlists/${id}`,
      token
    ).then((res) => {
      console.log("tracklist", res.data);
      setTrackList(res.data);
    });
  }, [id]);

  return (
    <div className="list--tracks">
      <h1>{trackList?.name}</h1>
      <h3>{trackList?.description}</h3>

      {trackList?.tracks?.items?.map((item, index) => (
        <Link to={"/playtrack/" + item.track.id} className="item" key={index}>
          <p className="name">{item.track.name}</p>
          <p>artists: {item.track.artists[0].name}</p>
        </Link>
      ))}
    </div>
  );
}
