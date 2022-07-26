import Home from "../img/home.png";
import HomeBlue from "../img/home-blue.png";
import Loupe from "../img/loupe.png";
import LoupeBlue from "../img/loupe-blue.png";
import Musical from "../img/musical-note.png";
import MusicalBlue from "../img/musical-note-blue.png";
import User from "../img/user.png";
import UserBlue from "../img/user-blue.png";

import { Link, NavLink } from "react-router-dom";

import "../css/Nav.scss";
import { useState } from "react";

// const List = [
//   {
//     link: "/",
//     src: Home,
//     activeSrc: HomeBlue,
//   },
//   {
//     link: "/search",
//     src: Loupe,
//     activeSrc: LoupeBlue,
//   },
//   {
//     link: "/musical-note",
//     src: Musical,
//     activeSrc: MusicalBlue,
//   },
//   {
//     link: "/user",
//     src: User,
//     activeSrc: UserBlue,
//   },
// ];

const List = {
  home: {
    link: "/",
    src: Home,
    activeSrc: HomeBlue,
  },
  search: {
    link: "/search",
    src: Loupe,
    activeSrc: LoupeBlue,
  },
  musical: {
    link: "/musical-note",
    src: Musical,
    activeSrc: MusicalBlue,
  },
  user: {
    link: "/user",
    src: User,
    activeSrc: UserBlue,
  },
};

function Nav() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [musical, setMusical] = useState(false);
  const [user, setUser] = useState(false);

  const activeHome = () => {
    setHome(true);
    setSearch(false);
    setMusical(false);
    setUser(false);
  };

  const activeSearch = () => {
    setHome(false);
    setSearch(true);
    setMusical(false);
    setUser(false);
  };

  const activeMusical = () => {
    setHome(false);
    setSearch(false);
    setMusical(true);
    setUser(false);
  };

  const activeUser = () => {
    setHome(false);
    setSearch(false);
    setMusical(false);
    setUser(true);
  };

  return (
    <div className="nav">
      {home ? (
        <Link className="item" to={List.home.link}>
          <img src={List.home.activeSrc} alt={List.home.link} />
        </Link>
      ) : (
        <Link onClick={activeHome} className="item" to={List.home.link}>
          <img src={List.home.src} alt={List.home.link} />
        </Link>
      )}

      {search ? (
        <Link className="item" to={List.search.link}>
          <img src={List.search.activeSrc} alt={List.search.link} />
        </Link>
      ) : (
        <Link onClick={activeSearch} className="item" to={List.search.link}>
          <img src={List.search.src} alt={List.search.link} />
        </Link>
      )}

      {musical ? (
        <Link className="item" to={List.musical.link}>
          <img src={List.musical.activeSrc} alt={List.musical.link} />
        </Link>
      ) : (
        <Link onClick={activeMusical} className="item" to={List.musical.link}>
          <img src={List.musical.src} alt={List.musical.link} />
        </Link>
      )}

      {user ? (
        <Link className="item" to={List.user.link}>
          <img src={List.user.activeSrc} alt={List.user.link} />
        </Link>
      ) : (
        <Link onClick={activeUser} className="item" to={List.user.link}>
          <img src={List.user.src} alt={List.user.link} />
        </Link>
      )}
    </div>
  );
}

{
  /* <Link className="item" key={index} to={item.link}>
              <img src={item.src} alt={item.link} />
            </Link> */
}

export default Nav;
