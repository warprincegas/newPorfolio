function Header(prop) {
  // const ref = useRef(null);

  return (
    <header>
      <h2>WarDude🦊</h2>
      <ul>
        <li onClick={prop.homeScroll}>Home</li>
        <li onClick={prop.aboutScroll}>About me</li>
        <li onClick={prop.serviceScroll}>Services</li>
        <li onClick={prop.projectScroll}>Projects</li>
        <li onClick={prop.contactScroll}>Contact me</li>
      </ul>
      <button className="hire-btn" onClick={prop.contactScroll}>
        Hire Me
      </button>

      <label
        className="hamburger-menu"
        onClick={() => prop.dispatch({ type: "show" })}
      >
        <input
          type="checkbox"
          checked={prop.open}
          onChange={() => prop.dispatch({ type: "show" })}
        />
      </label>
    </header>
  );
}

export default Header;
