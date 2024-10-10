import "../Styles/About-me.css";

function AboutMe(prop) {
  return (
    <div className="about-me" ref={prop.aboutRef}>
      <div className="header">
        <h3>About Me</h3>
      </div>
      <div className="about-boxes">
        <div className="about-box">
          <span>
            I am Ganiu Waris Olamilekan, a Computer Science student of LAUTECH
            OGBOMOSO. With my little understanding on Web Development, I can
            create a responsive user friendly Web Application.
          </span>
          <span>
            I`m a professional Frontend Developer with 12 months of experience
            building and deploying quality websites and web applications. I
            creates responsive web applications, consistently delivering
            exceptional user experiences using up-to-date standards and
            technologies to ensure scalable solutions.
          </span>
          <button>
            {/* <img src="Images\download-square-svgrepo-com.svg" alt="" /> */}
            {open && <small>Download CV</small>}
          </button>
        </div>
        {/* <div className="about-box">
          <div className="circle">
            <img
              src="Images\anonymous-4k-background-amoled--18793.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

// function Technology({ img, name, percent, className }) {
//   let [counter, setCounter] = useState(0);
//   console.log(percent);

//   return (
//     <div className="circle-cont">
//       <div className="small-circle">
//         <div className="outer">
//           <div className="inner">
//             <img src={img} alt={name} />
//           </div>
//         </div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           width="30px"
//           height="30px"
//         >
//           <circle
//             cx="30"
//             cy="30"
//             r="27"
//             stroke-linecap="round"
//             className={className}
//           />
//         </svg>
//       </div>
//       <div className="details">
//         <div className="percent">
//           {counter > percent
//             ? percent
//             : setInterval(() => {
//                 setCounter((counter) => counter + 1);
//               }, 500)}
//           %
//         </div>
//         <span>{name}</span>
//       </div>
//     </div>
//   );
// }

export default AboutMe;
