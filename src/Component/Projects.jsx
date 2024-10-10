import "../Styles/Projects.css";

function Projects(prop) {
  return (
    <div className="services-cont" ref={prop.projectRef}>
      <div className="header">
        <h3>Projects</h3>
      </div>

      <div className="projects">
        <Project />
        {/* <Project />
        <Project /> */}
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <img src="Images\Screenshot 2024-08-08 045638.png" alt="" />
      <div className="project-details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam,
          ipsam consequuntur magnam delectus similique quia eveniet distinctio
          dicta nesciunt eligendi veritatis atque ipsum soluta cumque cum
          quibusdam assumenda perspiciatis?
        </p>
        <div className="tech-stack">
          <strong>Tech Stack: </strong>
          <span> HTML, CSS and JavaScript</span>
        </div>
        <div className="project-options">
          <span>Live Preview</span>
          <span>View code</span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
