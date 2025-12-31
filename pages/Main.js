import { useEffect, useRef, useState } from "react";

const Main = ({ refer, executeScroll, refs }) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I build things for the Web & Mobile.";
  const [showCursor, setShowCursor] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="container-fluid pt-5 mt-5"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
      ref={refer}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-2",
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
          zIndex: "-1",
        }}
      ></div>
      
      {/* Floating particles effect */}
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: "0", pointerEvents: "none" }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="animate-float"
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              backgroundColor: "#64ffda",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="row align-items-center justify-content-center text-center h-100" style={{ position: "relative", zIndex: "1" }}>
        <div className="container">
          <div className="col-12">
            <h6
              className="mb-3 animate-fade-in-down"
              style={{ 
                color: "#64ffda", 
                transition: "0.3s",
                animationDelay: "0.2s"
              }}
            >
              Hi, my name is
            </h6>
            <h1
              className="mb-3 fw-bold animate-fade-in-up"
              style={{ 
                color: "#ccd6f6", 
                fontSize: "5.2vmax",
                animationDelay: "0.4s"
              }}
            >
              Abhishek Gattineni.
            </h1>
            <h1
              ref={textRef}
              className="mb-4 fw-bold"
              style={{ 
                color: "#8892b0", 
                fontSize: "4.2vmax",
                minHeight: "1.2em"
              }}
            >
              {displayedText}
              {showCursor && (
                <span style={{ 
                  borderRight: "2px solid #64ffda",
                  animation: "blink 1s infinite",
                  marginLeft: "5px"
                }}>|</span>
              )}
            </h1>
            <p 
              className="text-secondary animate-fade-in-up" 
              style={{ 
                color: "#8892b0",
                animationDelay: "0.8s"
              }}
            >
              I&apos;m a software engineer specializing in building exceptional
              digital experiences.
            </p>
            <button
              className="btn btn-outline-light my-4 animate-scale-in"
              style={{
                color: "#64ffda",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "transparent",
                borderColor: "#64ffda",
                animationDelay: "1s",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
                e.target.style.color = "#ccd6f6";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 12px 0 rgba(100, 255, 218, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#64ffda";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
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
