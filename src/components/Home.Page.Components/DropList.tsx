import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/TrackByPlaylistId.scss";

export default function DropList({ listTracks, trackId, onSelectSong }) {
  //   useEffect(() => {
  //     console.log(list);
  //   }, [list]);

  return (
    <div className="list--tracks  drop--down">
      {listTracks[0].track
        ? listTracks.map((item, index) => (
            <div
              key={index}
              className={item.track?.id === trackId ? "isPlaying" : null}
            >
              <Link
                onClick={onSelectSong}
                to={"/playtrack/" + item.track?.id}
                className="item"
              >
                <p className="name">{item.track?.name}</p>
                <p className="artists">
                  artists: {item.track?.artists[0]?.name}
                </p>
              </Link>
            </div>
          ))
        : listTracks.map((item, index) => (
            <div
              key={index}
              className={item.id === trackId ? "isPlaying" : null}
            >
              <Link
                onClick={() => click(false)}
                to={"/playtrack/" + item?.id}
                className="item"
              >
                <p className="name">{item?.name}</p>
                <p>artists: {item?.artists[0]?.name}</p>
              </Link>
            </div>
          ))}
    </div>
  );
}
