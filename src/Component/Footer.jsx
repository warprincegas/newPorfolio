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
          <a href="https://github.com/WarDudeFoxes" target="blank">
            <img src="Images\github-svgrepo-com (1).svg" alt="github logo" />
          </a>
        </div>
        <div className="img-border">
          <a
            href="https://www.instagram.com/dev_wardude/profilecard/?igsh=YndxMDhwZTQydWF0"
            target="blank"
          >
            <img
              src="Images\instagram-logo-facebook-svgrepo-com.svg"
              alt="instagram logo"
            />
          </a>
        </div>
        <div className="img-border">
          <a
            href="https://www.linkedin.com/in/ganiu-waris-588b722b7/"
            target="blank"
          >
            <img
              src="Images/linkedin-square-svgrepo-com.svg"
              alt="linkedin logo"
            />
          </a>
        </div>
        <div className="img-border">
          <a href="https://x.com/dev_wardude" target="black">
            <img src="Images\twitter-svgrepo-com (1).svg" alt="twitter logo" />
          </a>
        </div>
      </div>
      <div className="contact-details">
        <div className="email-cont">
          <img src="Images\email.png" alt="Email" />
          <a href="mailto:wardude704@gmail.com">
            <span>WarDude704@gmail.com</span>
          </a>
        </div>
        <div className="phone-cont">
          <img src="Images\phone-call.png" alt="Phone" />
          <a href="https://wa.me/">
            <span>+234 812 269 6223</span>
          </a>
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
