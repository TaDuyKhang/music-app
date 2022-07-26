import React, { useRef, useState, useEffect } from "react";
import { Route, Link, useParams, Routes } from "react-router-dom";
import PlayListByCategory from "./PlayListByCategory.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetCategories } from "../../requests.js";
import { useSelector } from "react-redux";
// import "../../css/Category.scss";

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
      console.log(res.data.categories);
    });
  }, []);

  return (
    <>
      <div className="slideShow">
        {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories?.items?.map((item, index) => (
            <SwiperSlide key={index}>    
              <Link to={"category/" + item.id}>{item.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper> */}

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
