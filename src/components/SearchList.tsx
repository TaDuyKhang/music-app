import { useSelector, useDispatch } from "react-redux";
import { setTracksList } from "../../store/slice/slice.js";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { setType } from "../store/slice/slice.js";

import "../css/SearchList.scss";
export default function SearchList() {
  const data = useSelector((state) => state.slice.SearchTracks);
  const dispatch = useDispatch();

  return (
    <div className="search--list">
      {data?.map((item, index) => (
        <Link
          onClick={() => dispatch(setType("search"))}
          to={"/playtrack/" + item.id}
          className="item"
          key={index}
        >
          <p className="name">{item.name}</p>
          <p className="artists">artists: {item.artists[0].name}</p>
        </Link>
      ))}
    </div>
  );
}
