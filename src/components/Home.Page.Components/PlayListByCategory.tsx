import { useParams, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCategoriesById } from "../../requests.js";
import { useSelector } from "react-redux";
import "../../css/Category.scss";
import TrackByPlaylistId from "./TrackByPlaylistId.tsx";

export default function PlayListByCategory(props) {
  const token: String = useSelector((state) => state.slice.token);
  const [playlists, setPlaylists] = useState();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      GetCategoriesById.getCategoriesById(
        `https://api.spotify.com/v1/browse/categories/${id}/playlists?limit=10`,
        token
      ).then((res) => {
        setPlaylists(res.data.playlists.items);
      });
    }
  }, [id]);

  return (
    <div className="categories">
      <h3>ID: {id}</h3>
      {playlists?.map((item, index) => (
        <Link to={"/playlist/" + item.id} className="item" key={index}>
          <img className="item--img" src={item.images[0].url} alt="" />
          <span className="item--name">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
