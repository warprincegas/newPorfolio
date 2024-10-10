import "../Styles/PopMenu.css";

export default function PopMenu(prop) {
  return (
    <div className={`pop-menu ${prop.open ? "opened" : ""}`}>
      <ul>
        <li onClick={prop.homeScroll}>Home</li>
        <li onClick={prop.aboutScroll}>About me</li>
        <li onClick={prop.serviceScroll}>Services</li>
        <li onClick={prop.projectScroll}>Projects</li>
        <li onClick={prop.contactScroll}>Contact me</li>
      </ul>
    </div>
  );
}
