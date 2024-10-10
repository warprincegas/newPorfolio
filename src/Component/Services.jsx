import "../Styles/Services.css";

function Services(prop) {
  return (
    <div className="skills-cont" ref={prop.serviceRef}>
      <h3>Services</h3>
      <div className="skills-container">
        <div className="skill problem-solver">
          <div className="skill-blur">
            <div className="skill-title">
              <span>💡</span>
              <p>Problem Solver</p>
            </div>
            <div className="skill-content">
              Having Challenges transforming your designs into code? I am here
              to help to solve that. 😉
            </div>
          </div>
        </div>
        <div className="skill responsive-design">
          <div className="skill-blur">
            <div className="skill-title">
              <span>📱</span>
              <p>Responsive Design</p>
            </div>
            <div className="skill-content">
              Making use of the mobile first approach, I make sure that all
              major screen sizes 💻 📱 are accounted for when building.
            </div>
          </div>
        </div>
        <div className="skill performance">
          <div className="skill-blur">
            <div className="skill-title">
              <span>⚙️</span>
              <p>Performance Optimization</p>
            </div>
            <div className="skill-content">
              Using CDNs and other modern development tools, I make my Web
              applications and Websites load faster and run smoother.
            </div>
          </div>
        </div>
        <div className="skill time">
          <div className="skill-blur">
            <div className="skill-title">
              <span>🕛</span>
              <p>Time Management</p>
            </div>
            <div className="skill-content">
              Time management is essential to every business and ensuring that
              tasks are completed on time. I constantly ensure I meet up to
              deadlines.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
