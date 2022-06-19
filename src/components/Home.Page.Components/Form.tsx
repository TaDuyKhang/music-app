import { useState } from "react";
import { GetTrack } from "../../requests.js";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");

  const searchTrack = (e) => {
    e.preventDefault();
    // props.SearchKey(inputValue);
    console.log("token", props.token);
    GetTrack.getTrack(
      "https://api.spotify.com/v1/search",

      inputValue
    ).then((res) => console.log("track", res));
  };

  return (
    <form onSubmit={searchTrack}>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button>Search</button>
    </form>
  );
}
