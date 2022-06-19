import Home from "../img/home.png";
// import HomeBlue from "../img/home-blue.png";
import Loupe from "../img/loupe.png";
// import LoupeBlue from "../img/loupe-blue.png";
import Musical from "../img/musical-note.png";
// import MusicalBlue from "../img/musical-note-blue.png";
import User from "../img/user.png";
// import UserBlue from "../img/user-blue.png";

import { Link } from "react-router-dom";
import "../css/Nav.scss";

const List = [
  {
    link: "/",
    src: Home,
  },
  {
    link: "/loupe",
    src: Loupe,
  },
  {
    link: "/musical-note",
    src: Musical,
  },
  {
    link: "/user",
    src: User,
  },
];

function Nav() {
  return (
    <div className="nav">
      {List.map((item, index) => (
        <Link className="item" key={index} to={item.link}>
          <img src={item.src} alt={item.link} />
        </Link>
      ))}
    </div>
  );
}

export default Nav;
