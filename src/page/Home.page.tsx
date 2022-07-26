import Categories from "../components/Home.Page.Components/Categories.tsx";
import Form from "../components/Home.Page.Components/Form.tsx";
import { Route, Routes } from "react-router-dom";
import { Spotify } from "../requests.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { setToken } from "../store/slice/slice.js";
import { useDispatch } from "react-redux";
import "../css/Home.scss";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    Spotify.getAccessToken()
      .then((data) => {
        dispatch(setToken(data.data.access_token));
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="home">
      <p className="title"> Nghe gì </p>
      <p className="title">hôm nay? </p>
      <Categories />
    </div>
  );
}

export default Home;
