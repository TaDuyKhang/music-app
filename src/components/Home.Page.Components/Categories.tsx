import React, { useRef, useState, useEffect } from "react";
import { Route, Link, useParams, Routes } from "react-router-dom";
// Import Swiper React components
import PlayListByCategory from "./PlayListByCategory.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetCategories } from "../../requests.js";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../css/Genres.scss";

// import required modules
import { Pagination } from "swiper";

export default function Categories() {
  const token: String = useSelector((state) => state.slice.token);
  const [categories, setCategories] = useState();
  useEffect(() => {
    GetCategories.getCategories(
      //   "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      "https://api.spotify.com/v1/browse/categories?locate=sv_US",
      token
    ).then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <>
      <div className="slideShow">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories?.items?.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <Link to=` /${item.id} `>{item.name}</Link> */}
              <Link to={"category/" + item.id}>{item.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
