import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetCategories } from "../../requests.js";
import { useSelector } from "react-redux";
import "../../css/Genres.scss";

export default function Categories() {
  const token: String = useSelector((state) => state.slice.token);
  const [categories, setCategories] = useState();

  useEffect(() => {
    GetCategories.getCategories(
      "https://api.spotify.com/v1/browse/categories?locate=sv_US",
      token
    ).then((res) => {
      setCategories(res.data.categories);
      console.log(res.data.categories);
    });
  }, [token]);

  return (
    <>
      <div className="slideShow">
        {categories?.items?.map((item, index) => (
          <Link className="item" key={index} to={"category/" + item.id}>
            <img className="icon" src={item?.icons[0]?.url} alt="" />
            <p className="name">{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
