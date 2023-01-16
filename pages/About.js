import Image from "next/image";
import MyPhoto from "../public/abhidp.jpg";

const About = ({ refer }) => {
  return (
    <div
      className="container-fluid "
      style={{ backgroundColor: "#0a192f" }}
      ref={refer}
    >
      <div className="row">
        <div className="col p-sm-5">
          <h5
            className="fw-normal"
            style={{ color: "#64ffda", fontSize: "1.6vmax" }}
          >
            01.{" "}
            <small
              className="fw-bold"
              style={{ color: "#ccd6f6", fontSize: "2.2vmax" }}
            >
              About Me
            </small>
          </h5>
          <br />
          <div className="row">
            <div className="col-md-6">
              <p className="col" style={{ color: "#8892b0" }}>
                Hello! My name is Abhishek Gattineni and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2016 when I decided to try editing custom Tumblr
                themes — turns out hacking together a custom reblog button
                taught me a lot about HTML & CSS!
              </p>
              <br />
              <p className="col" style={{ color: "#8892b0" }}>
                Fast-forward to today, and I’ve had the privilege of working at
                an India&apos;s Biggest Trekking agency, a start-up,and a huge
                MNC corporation. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <br />
              <p className="col" style={{ color: "#8892b0" }}>
                Here are a few technologies I’ve been working with recently:
                <br />
                <strong>
                  JavaScript (ES6+)
                  <br />
                  TypeScript
                  <br />
                  React JS
                  <br />
                  Node.js
                  <br />
                  Tailwind CSS
                  <br />
                  Bootstrap CSS
                  <br />
                  Python
                  <br />
                </strong>
              </p>
            </div>
            <div
              className="col-md-6 d-none d-md-block m-sm-auto"
              style={{ height: "40vmax", width: "30vmax" }}
            >
              {/* <img src={MyPhoto} alt="Pictute of me" /> */}
              <img
                src="/abhidp.jpg"
                className="card-img-top"
                alt="..."
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
