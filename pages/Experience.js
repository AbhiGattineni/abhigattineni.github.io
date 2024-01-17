import React from "react";

const Experience = ({ refer }) => {
  const timelineData = [
    {
      month: "4 Years",
      year: "2013",
      title: "Bachelors in Computer Science",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
    },
    {
      month: "1 Year",
      year: "2016",
      title: "Associate Director & Production Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/movie.jpg",
    },
    {
      month: "5 Years",
      year: "2016",
      title: "Operations Head at Hyderabad Trekking Company",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/htc.png",
    },
    {
      month: "4 Years",
      year: "2017",
      title: "Software Engineer at Cyient Ltd",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/cyient.png",
    },
    {
      month: "2 Years",
      year: "2019",
      title: "Whellz4Wash - Startup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/wheelz4wash.png",
    },
    {
      year: "2021",
      title: "Anddhen Group",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/loading.png",
    },
    {
      month: "1.5 Years",
      year: "2021",
      title: "Masters in California State University, Long Beach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/csulb.jfif",
    },
    {
      month: "1.5 Years",
      year: "2023",
      title: "Software Engineer at Wells Fargo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloremque consequuntur officiis aut nemo fugit aliquid cumque, blanditiis suscipit autem, molestiae quasi praesentium! Hic enim odio magnam ipsa, alias quo?",
      img: "/wells.jpeg",
    },
  ];

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#0a192f",
        background: "linear-gradient(45deg, #0a192f, #020c1b)",
        borderTop: "1px solid white",
      }}
      ref={refer}
    >
      <div className="container">
        <div className="main-timeline">
          {timelineData.map((item, index) => (
            <div
              className="timeline"
              key={index}
              style={{ paddingTop: "5rem" }}
            >
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month" style={{ color: "#8892b0" }}>
                      {item.month}
                    </span>
                    <span className="year" style={{ color: "#8892b0" }}>
                      {item.year}
                    </span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5
                  className="title"
                  style={{ color: "#64ffda", transition: "0.3s" }}
                >
                  {item.title}
                </h5>
                <p className="description" style={{ color: "#ccd6f6" }}>
                  {item.description}
                </p>
                {item.img && (
                  <div
                    className="m-3"
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
