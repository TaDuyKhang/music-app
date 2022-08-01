import { GetTrackById } from "../../requests.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrackId } from "../../store/slice/slice.js";
import DropList from "./DropList.tsx";

import "../../css/PlayTrack.scss";

export default function PlayTrack() {
  const [track, setTrack] = useState();
  const [play, setPlay] = useState(false);
  const [dropList, setDropList] = useState(false);
  const type: string = useSelector((state) => state.slice.type);
  const dispatch = useDispatch();
  const list: array = useSelector((state) => {
    if (type === "search") {
      return state.slice.SearchTracks;
    } else {
      return state.slice.trackList;
    }
  });

  let { id } = useParams();
  const token: String = useSelector((state) => state.slice.token);

  useEffect(() => {
    dispatch(setTrackId(id));
    GetTrackById.getTrackById(
      `https://api.spotify.com/v1/tracks/${id}`,
      token
    ).then((res) => {
      setTrack(res);
    });
  }, [id]);

  const onSelectSong = () => {
    setDropList(false);
  };

  return (
    <div className="tracks">
      <div className="top--title">
        {dropList ? (
          <button onClick={() => setDropList(!dropList)} className="list--btn">
            <img src="/images/up-arrow.png" alt="" />
          </button>
        ) : (
          <button onClick={() => setDropList(!dropList)} className="list--btn">
            <img src="/images/down-arrow.png" alt="" />
          </button>
        )}
        <p className="track--name">{track?.data.name}</p>
      </div>
      <div className={dropList ? "active" : "notActive"}>
        <DropList listTracks={list} trackId={id} onSelectSong={onSelectSong} />
      </div>

      <div className={dropList ? "notActive" : "active"}>
        <img
          className={play ? "circle-img logo active" : "circle-img logo"}
          src={track?.data.album.images[0].url}
          alt=""
        />
        <p className="tracks--artists">
          Tác giả: {track?.data.artists[0].name}
        </p>
      </div>
    </div>
  );
}
