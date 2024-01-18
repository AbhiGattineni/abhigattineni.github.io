import Image from "next/image";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiBootstrap } from "react-icons/si";

const About = ({ refer }) => {
  return (
    <section
      id="about"
      className="about"
      style={{
        backgroundColor: "#0a192f",
        background: "linear-gradient(45deg, #0a192f, #020c1b)",
        paddingBottom: "5rem",
        paddingTop: "5rem",
      }}
      ref={refer}
    >
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p style={{ color: "#ccd6f6" }}>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="img-wrapper">
              <img src="/abhidp.jpg" className="img-fluid" alt="" />
            </div>
          </div>

          <div
            className="col-lg-8 pt-4 pt-lg-0 content p-lg-5"
            data-aos="fade-left"
            style={{ color: "#ccd6f6" }}
          >
            <h3>Web &amp; Mobile App Developer</h3>
            <p className="fst-italic">
              Developer who is currently working with Wells Fargo as a Software
              Engineer. I have a passion for developing scalable, responsive and
              user-friendly web applications. I am a quick learner and a team
              player who is always ready to learn new technologies and
              frameworks. I am currently looking for a full-time opportunity as
              a Software Engineer.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>5 Aug 1996</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+1 562-542-7985</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Los Angeles, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Master&apos;s in CS, CSULB.</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong>{" "}
                    <span>abhishekgattineni@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills container" style={{ paddingTop: "3rem" }}>
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  style={{ width: "90%" }}
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                REACT <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WORDPRESS/SHOPIFY <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                NODE.JS <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="interests container" style={{ paddingTop: "3rem" }}>
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
              <h3>Programming</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i
                className="ri-bar-chart-box-line"
                style={{ color: "#5578ff" }}
              ></i>
              <h3>Travelling</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i
                className="ri-calendar-todo-line"
                style={{ color: "#e80368" }}
              ></i>
              <h3>Trekking</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i
                className="ri-paint-brush-line"
                style={{ color: "#e361ff" }}
              ></i>
              <h3>Driving</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-database-2-line"
                style={{ color: "#47aeff" }}
              ></i>
              <h3>Gym</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-gradienter-line"
                style={{ color: "#ffa76e" }}
              ></i>
              <h3>Food</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-file-list-3-line"
                style={{ color: "#11dbcf" }}
              ></i>
              <h3>Trading</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-price-tag-2-line"
                style={{ color: "#4233ff" }}
              ></i>
              <h3>Investments</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
              <h3>Dirada Pack</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
              <h3>Moton Ideal</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-base-station-line"
                style={{ color: "#ff5828" }}
              ></i>
              <h3>Verdo Park</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-fingerprint-line"
                style={{ color: "#29cc61" }}
              ></i>
              <h3>Flavor Nivelanda</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
