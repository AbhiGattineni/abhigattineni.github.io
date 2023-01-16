const Experience = ({ refer }) => {
  return (
    <div
      className="container-fluid min-vh-100"
      style={{ backgroundColor: "#0a192f" }}
      ref={refer}
    >
      <div className="row ms-sm-5 me-sm-5">
        <div className="col-12 mt-5">
          <h5
            className="fw-normal"
            style={{ color: "#64ffda", fontSize: "1.6vmax" }}
          >
            02.{" "}
            <small
              className="fw-bold"
              style={{ color: "#ccd6f6", fontSize: "2.2vmax" }}
            >
              Experience
            </small>
          </h5>
        </div>
        <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
          <div
            className="accordion-item"
            style={{ backgroundColor: "#112240", color: "#8892b0" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button "
                type="button"
                style={{ backgroundColor: "#112240", color: "#64ffda" }}
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                CSULB- California State University Long Beach (2021-2023)
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show mt-2"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="row">
                <div className="col-sm-4">
                  <div
                    className="card text-white"
                    style={{ backgroundColor: "#112240" }}
                  >
                    {/* <img src="/cyient.png" className="card-img-top" alt="..." layout='fill' /> */}
                    <img
                      src="/csulb.jfif"
                      className="card-img-top"
                      alt="..."
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="accordion-body">
                    <strong>
                      Masters in California State University Long Beach
                    </strong>{" "}
                    I attended California State University, Long Beach where i
                    graduated in 2022. My favorite subject is computer science,
                    and programming, web design. I chose to obtain his
                    master&apos;s degree at CSULB because the program provided
                    various research topics that interested him.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item mt-2"
            style={{ backgroundColor: "#112240", color: "#8892b0" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#112240", color: "#64ffda" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Cyient Ltd (2017 - 2021)
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse mt-2"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="row">
                <div className="col-sm-8">
                  <div className="accordion-body">
                    <strong>My first hands on experience in cyient.</strong>{" "}
                    It&apos;s my first MNC job where i learned my practical
                    knowlege on full stack development. I extensively worked on
                    React js, Node js, JavaScript focussing primarily on Full
                    Stack Development.
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="card text-white"
                    style={{ backgroundColor: "#112240" }}
                  >
                    <img
                      src="/cyient.png"
                      className="card-img-top"
                      alt="..."
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item mt-2"
            style={{ backgroundColor: "#112240", color: "#8892b0" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#112240", color: "#64ffda" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                HTC- Hyderabad Trekking Company (2016-2021)
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse mt-2"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="row">
                <div className="col-sm-4">
                  <div
                    className="card text-white"
                    style={{ backgroundColor: "#112240" }}
                  >
                    <img
                      src="/htc.png"
                      className="card-img-top"
                      alt="..."
                      height={150}
                      width={100}
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="accordion-body">
                    <strong>HTC is my first business exposure.</strong>{" "}
                    Hyderabad Trekking Comapny is india&apos;s leading travel
                    company where i initially started as a tourist with them
                    later it gave me positions like Trip organizer, Organising
                    manager, and Operations head. This exposure taught me a lot
                    in terms of dealing with people and nothing less in
                    technical stuff for developing all the technical websites
                    for them.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
