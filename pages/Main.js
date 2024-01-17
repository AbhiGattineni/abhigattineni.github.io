const Main = ({ refer, executeScroll, refs }) => {
  return (
    <div
      className="container-fluid pt-5 mt-5"
      style={{
        position: "relative",
        overflow: "hidden", // Ensures the video and gradient don't overflow the container
        height: "100vh",
      }}
      ref={refer}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-2", // Ensures the video stays in the background, behind the gradient
        }}
      >
        <source src="main2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, rgba(10, 25, 47, 0.7), rgba(2, 12, 27, 0.7))",

          zIndex: "-1", // Ensures the gradient is above the video but below the content
        }}
      ></div>
      <div className="row align-items-center justify-content-center text-center h-100">
        <div className="container">
          <div className="col-12 animated fadeIn">
            {" "}
            {/* animated on load */}
            <h6
              className="mb-3"
              style={{ color: "#64ffda", transition: "0.3s" }}
            >
              Hi, my name is
            </h6>
            <h1
              className="mb-3 fw-bold"
              style={{ color: "#ccd6f6", fontSize: "5.2vmax" }}
            >
              Abhishek Gattineni.
            </h1>
            <h1
              className="mb-4 fw-bold"
              style={{ color: "#8892b0", fontSize: "4.2vmax" }}
            >
              I build things for the Web & Mobile.
            </h1>
            <p className="text-secondary" style={{ color: "#8892b0" }}>
              I’m a software engineer specializing in building exceptional
              digital experiences.
            </p>
            <button
              className="btn btn-outline-light my-4"
              style={{
                color: "#64ffda",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "transparent", // Ensures background is transparent initially
                borderColor: "#64ffda", // Matches the text color
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0a192f"; // Darker background on hover
                e.target.style.color = "#ccd6f6"; // Lighter text on hover
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent"; // Reverts to transparent
                e.target.style.color = "#64ffda"; // Reverts to original text color
              }}
              onClick={() => executeScroll(refs.worksRef)}
            >
              Checkout my works!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
