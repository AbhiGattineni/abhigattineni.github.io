import { useRouter } from "next/router";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Contact = ({ refer }) => {
  const router = useRouter();
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#0a192f" }}
      ref={refer}
    >
      <div className="text-center">
        <h6 style={{ color: "#64ffda" }}>04. What&apos;s Next?</h6>
        <h1 className="fw-bold fs-1 mb-3" style={{ color: "#ccd6f6" }}>
          Get In Touch
        </h1>
        <p
          className="fs-6 mx-auto"
          style={{ color: "#8892b0", maxWidth: "50%" }}
        >
          I am currently looking for new opportunities in Full Stack/Front End
          Development. My inbox is always open. Whether you have an opportunity
          or just want to say hi, please connect by clicking the button below.
        </p>
        <button
          className="btn btn-outline-light"
          style={{ color: "#64ffda" }}
          type="submit"
          onClick={() => router.push("mailto:abhishekgattineni@gmail.com")}
        >
          Say Hello
        </button>
        <div className="d-flex justify-content-center mt-4">
          <BsFacebook
            className="m-3 text-white"
            size={30}
            onClick={() =>
              window.open("https://www.facebook.com/abhi.gattineni/", "_blank")
            }
          />
          <BsInstagram
            className="m-3 text-white"
            size={30}
            onClick={() =>
              window.open("https://www.instagram.com/abhigattineni/", "_blank")
            }
          />
          <BsLinkedin
            className="m-3 text-white"
            size={30}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abhishek-gattineni-05937088/",
                "_blank"
              )
            }
          />
        </div>
        <div className="align-self-end mt-4" style={{ color: "#a8b2d1" }}>
          <h6 className="fs-6">Design & Built by Abhi Gattineni</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
