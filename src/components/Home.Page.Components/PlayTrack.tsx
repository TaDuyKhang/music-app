import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Demo from "./Chia Tay.mp3";
import { GetCategoriesById } from "../../requests.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlayTrack() {
  let { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    console.log(id);
    history.push("/abc");
  }, [id]);

  return (
    <div className="list--tracks">
      <AudioPlayer
        autoPlay
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
