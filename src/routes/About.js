import "./About.css";
import AboutBox from "../components/AboutBox";

function About() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const boxes = [
    {
      title: <h2>Title</h2>,
      text: lorem,
    },
    {
      title: <h2>Title</h2>,
      text: lorem,
    },
    {
      title: "3",
      text: null,
    },
    {
      title: "4",
      text: null,
    },
    {
      title: "5",
      text: null,
    },
    {
      title: "6",
      text: null,
    },
  ];
  const createBoxes = (arr) => {
    return arr.map((box) => <AboutBox title={box.title} text={box.text} />);
  };
  return (
    <div className="aboutBody">
      <div className="top">
        <div className="topLeft">
          <div className="topBox">
            <h2>
              GLOBAL
              <br />
              BUSINESS
            </h2>
            <p>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="topRight">
          <img
            className="aboutImg"
            src={`${process.env.PUBLIC_URL}/img/right1.png`}
            alt=""
          />
          <img
            className="aboutImg"
            src={`${process.env.PUBLIC_URL}/img/right2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="boxAll">
        <div className="boxLeft">{createBoxes(boxes)}</div>
        <div className="boxRight">7</div>
      </div>
      <div className="footer">
        <div className="footerLeft">
          <ul>
            <li>법적고지</li>
            <li>|</li>
            <li>이메일무단수집거부</li>
            <li>|</li>
            <li>이용약관</li>
            <li>|</li>
            <li>개인정보취급방침</li>
            <li>|</li>
            <li>고객센터</li>
            <li>|</li>
            <li>입찰공고</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
