import { Link } from "react-router-dom";
import "./Home.css";
import HomeBox from "../components/HomeBox";

function Home() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const icons = [
    {
      text: lorem,
      image: "/img/icon1.png",
    },
    {
      text: lorem,
      image: "/img/icon2.png",
    },
    {
      text: lorem,
      image: "/img/icon3.png",
    },
    {
      text: lorem,
      image: "/img/icon4.png",
    },
  ];
  const createIcons = (arr) => {
    return arr.map((icon) => <HomeBox text={icon.text} image={icon.image} />);
  };
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to="./">How it works</Link>
          </li>
          <li>
            <Link to="./">Gifts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="headerLogo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
          </li>
          <li>
            <Link to="./">Login</Link>
          </li>
          <li>
            <Link to="./">Members</Link>
          </li>
          <li>
            <Link to="./">Contracts</Link>
          </li>
        </ul>
      </div>
      <div className="mainPicture"></div>
      <div className="iconTitle">
        "WHAT'S FOR DINNER"
        <br />
        <span>
          FINALLY HAS AN
          <br />
          EASY ANWSER
        </span>
      </div>
      <div className="iconBox">{createIcons(icons)}</div>
      <div className="chefs">
        <div>
          <p>
            <span>Title</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={`${process.env.PUBLIC_URL}/img/chef.png`} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
