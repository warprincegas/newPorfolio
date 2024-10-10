import "../Styles/Footer.css";

function Footer(prop) {
  return (
    <footer>
      <h2>WarDude🦊</h2>
      <ul>
        <li onClick={prop.homeScroll}>Home</li>
        <li onClick={prop.serviceScroll}>Services</li>
        <li onClick={prop.aboutScroll}>About me</li>
        <li onClick={prop.projectScroll}>Projects</li>
        <li onClick={prop.contactScroll}>Contact me</li>
      </ul>
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
      <div className="contact-details">
        <div className="email-cont">
          <img src="Images\email.png" alt="Email" />
          <span>WarDude704@gmail.com</span>
        </div>
        <div className="phone-cont">
          <img src="Images\phone-call.png" alt="Phone" />
          <span>+234 812 269 6223</span>
        </div>
      </div>

      <div className="copy-right">
        <img src="Images\copyright (1).png" alt="Copyright" />
        <small className="copy-write">2024 Ganiu Waris</small>
      </div>
    </footer>
  );
}

export default Footer;
