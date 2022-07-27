import Categories from "../components/Home.Page.Components/Categories.tsx";
import "../css/Home.scss";

function Home() {
  return (
    <div className="home">
      <p className="title"> Nghe gì </p>
      <p className="title">hôm nay? </p>
      <Categories />
    </div>
  );
}

export default Home;
