import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { GetTrackById } from "../../requests.js";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../css/PlayTrack.scss";

const List = [
  {
    src: "/music/Ba Kể Con Nghe.mp3",
  },
  {
    src: "/music/Chia Tay.mp3",
  },
  {
    src: "/music/Tháng Tư Là Lời Nói Dối Của Em.mp3",
  },
  {
    src: "/music/WayBackHome-SHAUN.mp3",
  },
  {
    src: "/music/Yêu 5_Rhymastic.mp3",
  },
];

function Audio() {
  const [track, setTrack] = useState();
  const [trackId, setTrackId] = useState();
  const [play, setPlay] = useState(false);
  const [src, setSrc] = useState({ src: "/music/Ba Kể Con Nghe.mp3" });
  const [shuffle, setShuffle] = useState(false);
  const type: string = useSelector((state) => state.slice.type);

  const list: array = useSelector((state) => {
    if (type === "search") {
      return state.slice.SearchTracks;
    } else {
      return state.slice.trackList;
    }
  });
  const id: string = useSelector((state) => state.slice.trackId);

  // let { id } = useParams();
  const token: String = useSelector((state) => state.slice.token);
  let history = useNavigate();

  useEffect(() => {
    GetTrackById.getTrackById(
      `https://api.spotify.com/v1/tracks/${id}`,
      token
    ).then((res) => {
      setTrack(res);
    });
  }, [id]);

  useEffect(() => {
    if (trackId) {
      history(`/playtrack/${trackId.track.id}`);
    }
  }, [trackId]);

  const ChangeTrack = (id: string, numble: numble) => {
    const clone = list.findIndex((item, index) => item.track.id === id);
    const result = list.find((item, index) => {
      return index === clone + numble;
    });
    console.log("result", result);
    return result;
  };

  const ChangeTrackAssets = (src: string, numble: numble) => {
    const clone = List.findIndex((item, index) => item.src === src?.src);
    let result: Object;
    if (clone === List.length - 1 && numble === 1) {
      // debugger;
      result = List.find((item, index) => {
        return index === 0;
      });
      return result;
    } else {
      if (clone === 0 && numble === -1) {
        console.log("a");
        result = List.find((item, index) => {
          return index === List.length - 1;
        });
        return result;
      } else {
        result = List.find((item, index) => {
          return index === clone + numble;
        });
        return result;
      }
    }
    return result;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const shuffleTrack = () => {
    const random = getRandomInt(list.length);
    const result = list.find((item, index) => {
      return index === random;
    });
    return result;
  };

  const shuffleTrackAssets = () => {
    debugger;
    const random = getRandomInt(List.length);

    const result = List.find((item, index) => {
      return index === random;
    });
    console.log("shuffle:", result);

    return result;
  };

  const onSuffle = () => {
    // shuffleTrack();
    const randomSrc = shuffleTrackAssets();
    setSrc(randomSrc);
    setTrackId(randomSrc);
  };

  const nextTrack = () => {
    debugger;
    setSrc(ChangeTrackAssets(src, 1));
    setTrackId(ChangeTrack(id, 1));
  };

  const preTrack = () => {
    setSrc(ChangeTrackAssets(src, -1));
    setTrackId(ChangeTrack(id, -1));
  };

  return (
    <div className="tracks">
      {/* <p className="track--name">{track?.data.name}</p>
      <img
        className={play ? "logo active" : "logo"}
        src={track?.data.album.images[0].url}
        alt=""
      /> */}

      <AudioPlayer
        className="player"
        src={src?.src}
        autoPlay={false}
        nextTrack
        onPlay={() => setPlay(!play)}
        onPause={() => setPlay(!play)}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={nextTrack}
        onClickPrevious={preTrack}
        onEnded={shuffle ? onSuffle : nextTrack}
      />
      <button className="shuffle-btn" onClick={() => setShuffle(!shuffle)}>
        {shuffle ? (
          <img src="/images/shuffle.png" alt="" />
        ) : (
          <img src="/images/shuffle (1).png" alt="" />
        )}
      </button>
    </div>
  );
}

export default Audio;
