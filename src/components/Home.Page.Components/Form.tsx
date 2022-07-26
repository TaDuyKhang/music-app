import { useState } from "react";
import { GetTrack } from "../../requests.js";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTracks } from "../../store/slice/slice.js";
import "../../css/Form.scss";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");
  const token: String = useSelector((state) => state.slice.token);
  const dispatch = useDispatch();
  let history = useNavigate();

  const searchTrack = (e) => {
    e.preventDefault();
    // props.SearchKey(inputValue);
    console.log("token", props.token);
    GetTrack.getTrack(
      "https://api.spotify.com/v1/search",
      token,
      inputValue
    ).then((res) => {
      console.log("track", res);
      dispatch(setSearchTracks(res.data.tracks.items));
      history("/search");
    });
  };

  return (
    <form className="form" onSubmit={searchTrack}>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button className="btn">Search</button>
    </form>
  );
}
