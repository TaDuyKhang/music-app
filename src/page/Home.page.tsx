import Nav from "../components/Nav.tsx";
import Form from "../components/Home.Page.Components/Form.tsx";
import Categories from "../components/Home.Page.Components/Categories.tsx";
import PlayListByCategory from "../components/Home.Page.Components/PlayListByCategory.tsx";

import { Route, Routes } from "react-router-dom";

import { Spotify } from "../requests.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { setToken } from "../store/slice/slice.js";
import { useDispatch } from "react-redux";

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
    <div>
      <Form />
      <Categories />
      <Nav />
    </div>
  );
}

export default Home;
