import "../Styles/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form(prop) {
  const check = false;
  const checks = false;
  function handleFormSubmit(e) {
    e.preventDefault();
    check
      ? toast.success("Message sent")
      : toast.error(checks ? "bad email" : "bad password");
    // toast(check ? "Success" : "Error");
  }

  return (
    <>
      <div className="form-cont" ref={prop.contactRef}>
        <div className="header">
          <h1>Let`s work together</h1>
          <span>
            I`d love to hear about what you`re working on and how I could help.
          </span>
        </div>
        <form action="submit" onSubmit={(e) => handleFormSubmit(e)}>
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
          <ToastContainer
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            autoClose={2000}
            // closeButton={<p>close</p>}
            // icon={"🦊"}
          />
        </form>
      </div>
    </>
  );
}

// Array.from({ length: 10 }, (__, i) => <span key={i}>{i}</span>);

export default Form;
