import { useEffect, useReducer, useRef } from "react";
import "../Styles/App.css";
import Header from "./Header";
import "../Styles/Header.css";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Form from "./Form";
import PopMenu from "./PopMenu";

const iState = { open: false };

function reducer(state, action) {
  switch (action.type) {
    case "show":
      return { ...state, open: !state.open };
    case "hideShow":
      return { ...state, open: false };
  }
}

// const refs = {
//   home: null,
//   services: null,
//   about: null,
//   projects: null,
//   contact: null,
// };

// const focusInput = () => {
//   refs.current.input.focus();
// };

// const changeButtonText = () => {
//   refs.current.button.innerText = "Clicked!";
// };

// <div>
//   <input ref={} placeholder="Focus me" />
//   <button ref={(el) => (refs.current.button = el)} onClick={changeButtonText}>
//     Click me
//   </button>
//   <button onClick={focusInput}>Focus Input</button>
// </div>;

function App() {
  const [{ open }, dispatch] = useReducer(reducer, iState);

  useEffect(function () {
    document.addEventListener("scroll", () => {
      dispatch({ type: "hideShow" });
    });

    document.querySelector("main").addEventListener("click", () => {
      dispatch({ type: "hideShow" });
    });
  }, []);

  const homeElem = useRef(null);
  const aboutElem = useRef(null);
  const projectElem = useRef(null);
  const contactElem = useRef(null);
  const serviceElem = useRef(null);

  function homeScroll() {
    homeElem.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  function aboutScroll() {
    aboutElem.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function projectScroll() {
    projectElem.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  function contactScroll() {
    contactElem.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  function serviceScroll() {
    serviceElem.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  return (
    <>
      <Header
        dispatch={dispatch}
        open={open}
        contactScroll={contactScroll}
        aboutScroll={aboutScroll}
        projectScroll={projectScroll}
        homeScroll={homeScroll}
        serviceScroll={serviceScroll}
      />
      {
        <PopMenu
          open={open}
          contactScroll={contactScroll}
          aboutScroll={aboutScroll}
          projectScroll={projectScroll}
          homeScroll={homeScroll}
          serviceScroll={serviceScroll}
        />
      }
      <main>
        <Home homeRef={homeElem} contactScroll={contactScroll} />
        <AboutMe aboutRef={aboutElem} />
        <Services serviceRef={serviceElem} />
        <Projects projectRef={projectElem} />
        <Form contactRef={contactElem} />
      </main>
      <Footer
        contactScroll={contactScroll}
        aboutScroll={aboutScroll}
        projectScroll={projectScroll}
        homeScroll={homeScroll}
        serviceScroll={serviceScroll}
      />
    </>
  );
}

export default App;
