import { useRouter } from "next/router";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { useEffect } from "react";

const Contact = ({ refer }) => {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".contact-animate");
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: "#0a192f",
        background: "linear-gradient(45deg, #0a192f, #020c1b)",
        overflow: "hidden",
        width: "100%"
      }}
      ref={refer}
    >
      <div className="text-center">
        <h6 className="contact-animate fade-in-on-scroll" style={{ color: "#64ffda" }}>04. What&apos;s Next?</h6>
        <h1 className="fw-bold fs-1 mb-3 contact-animate fade-in-on-scroll" style={{ color: "#ccd6f6", animationDelay: "0.2s" }}>
          Get In Touch
        </h1>
        <p
          className="fs-6 mx-auto contact-animate fade-in-on-scroll"
          style={{ color: "#8892b0", maxWidth: "50%", animationDelay: "0.4s" }}
        >
          I am currently looking for new opportunities in Full Stack/Front End
          Development. My inbox is always open. Whether you have an opportunity
          or just want to say hi, please connect by clicking the button below.
        </p>
        <button
          className="btn btn-outline-light contact-animate scale-in-on-scroll"
          style={{ 
            color: "#64ffda",
            borderColor: "#64ffda",
            backgroundColor: "transparent",
            animationDelay: "0.6s",
            transition: "all 0.3s ease"
          }}
          type="submit"
          onClick={() => router.push("mailto:abhishekgattineni@gmail.com")}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px 0 rgba(100, 255, 218, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Say Hello
        </button>
        <div className="d-flex justify-content-center mt-4 contact-animate fade-in-on-scroll" style={{ animationDelay: "0.8s" }}>
          <div
            className="m-3"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onClick={() =>
              window.open("https://www.facebook.com/abhi.gattineni/", "_blank")
            }
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#ccd6f6";
                icon.style.transform = "translateY(-5px) scale(1.2)";
              }
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#64ffda";
                icon.style.transform = "translateY(0) scale(1)";
              }
            }}
          >
            <BsFacebook
              size={30}
              style={{ 
                color: "#64ffda",
                transition: "all 0.3s ease",
                display: "block"
              }}
            />
          </div>
          <div
            className="m-3"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onClick={() =>
              window.open("https://www.instagram.com/abhigattineni/", "_blank")
            }
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#ccd6f6";
                icon.style.transform = "translateY(-5px) scale(1.2)";
              }
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#64ffda";
                icon.style.transform = "translateY(0) scale(1)";
              }
            }}
          >
            <BsInstagram
              size={30}
              style={{ 
                color: "#64ffda",
                transition: "all 0.3s ease",
                display: "block"
              }}
            />
          </div>
          <div
            className="m-3"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abhishek-gattineni-05937088/",
                "_blank"
              )
            }
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#ccd6f6";
                icon.style.transform = "translateY(-5px) scale(1.2)";
              }
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.color = "#64ffda";
                icon.style.transform = "translateY(0) scale(1)";
              }
            }}
          >
            <BsLinkedin
              size={30}
              style={{ 
                color: "#64ffda",
                transition: "all 0.3s ease",
                display: "block"
              }}
            />
          </div>
        </div>
        <div className="align-self-end mt-4 contact-animate fade-in-on-scroll" style={{ color: "#a8b2d1", animationDelay: "1s" }}>
          <h6 className="fs-6">Design & Built by Abhi Gattineni</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
