import "../Styles/Home.css";
import ProgressExample from "./ProgressiveBar";

function Home(prop) {
  return (
    <div className="box-cont" ref={prop.homeRef}>
      <div className="box">
        <span className="i">Hi I am</span>
        <h4 className="name">Ganiu Waris</h4>
        <h1 className="profession">Web developer</h1>
        <div className="img-cont">
          <div className="img-border">
            <img src="Images\github-svgrepo-com (1).svg" alt="github logo" />
          </div>
          <div className="img-border">
            <img
              src="Images\instagram-logo-facebook-svgrepo-com.svg"
              alt="instagram logo"
            />
          </div>
          <div className="img-border">
            <img
              src="Images/linkedin-square-svgrepo-com.svg"
              alt="linkedin logo"
            />
          </div>
          <div className="img-border">
            <img src="Images\twitter-svgrepo-com (1).svg" alt="twitter logo" />
          </div>
        </div>
        <div className="box-options">
          <button className="hire-me">Hire Me</button>
          <button className="download-cv">Download CV</button>
        </div>
        <div className="review">
          <div className="type">
            <h6>1+</h6>
            <span>Experiences</span>
          </div>
          <div className="type">
            <h6>10+</h6>
            <span>Project done</span>
          </div>
          <div className="type">
            <h6>6+</h6>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="technologies">
          <Technology
            img={"Images/html-svgrepo-com.svg"}
            name={"HTML5"}
            percent={100}
            className="html"
          >
            <ProgressExample num={100} />
          </Technology>
          <Technology
            img={"Images/css-3-svgrepo-com.svg"}
            name={"CSS3"}
            percent={100}
            className={"css"}
          >
            {" "}
            <ProgressExample num={100} />
          </Technology>
          <Technology
            img={"Images/javascript-svgrepo-com.svg"}
            name={"JavaScript"}
            percent={100}
            className={"javascript"}
          >
            <ProgressExample num={100} />
          </Technology>

          <Technology
            img={"Images/react-svgrepo-com.svg"}
            name={"React"}
            percent={25}
            className={"react"}
          >
            <ProgressExample num={30} />
          </Technology>
        </div>
      </div>
    </div>
  );
}

function Technology(prop) {
  return (
    <div className="circle-cont">
      <div className="small-circle">
        <div className="outer">
          <div className="inner">
            <img src={prop.img} alt={prop.name} />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="30px"
          height="30px"
        >
          <circle
            cx="30"
            cy="30"
            r="27"
            strokeLinecap="round"
            className={prop.className}
          />
        </svg>
      </div>

      <div className="details">
        <div className="percent">{prop.children}</div>
        <span>{prop.name}</span>
      </div>
    </div>
  );
}

export default Home;
