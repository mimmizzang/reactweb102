import "./About.css";

function About() {
  return (
    <body className="aboutBody">
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
          <img className="aboutImg" src="img/right1.png" />
          <img className="aboutImg" src="img/right2.png" />
        </div>
      </div>
      <div className="boxAll">
        <div className="boxLeft">
          <div className="box">
            <h2>Title</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box">
            <h2>Title</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
          <div className="box">6</div>
        </div>
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
    </body>
  );
}

export default About;
