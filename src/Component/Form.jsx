import "../Styles/Form.css";

function Form(prop) {
  return (
    <div className="form-cont" ref={prop.contactRef}>
      <div className="header">
        <h1>Let`s work together</h1>
        <span>
          I`d love to hear about what you`re working on and how I could help.
        </span>
      </div>
      <form action="">
        <div className="input-cont">
          <span>Name</span>
          <input type="text" placeholder="Please enter your name" />
        </div>
        <div className="input-cont">
          <span>Email</span>
          <input type="text" placeholder="Please enter your email" />
        </div>
        <div className="input-cont">
          <span>Subject</span>
          <input type="text" placeholder="Please enter your Subject" />
        </div>
        <div className="input-cont">
          <span>Message</span>
          <textarea
            name=""
            rows="10"
            id=""
            placeholder="How can I help"
          ></textarea>
        </div>
        <button>SEND MESSAGE</button>
      </form>
    </div>
  );
}

Array.from({ length: 10 }, (__, i) => <span key={i}>{i}</span>);

export default Form;
