import { useEffect, useRef } from "react";

const Works = ({ refer }) => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("visible");
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    const projects = [
        {
            title: "Word Highlighter",
            type: "Chrome Extension",
            description: "Highlight words with different colors on webpages. Highlighting the words based on the colors in the website that helps the users find the content easily based on highlighting.",
            link: "https://chromewebstore.google.com/detail/word-highlighter/nheocgebdfhdfknfppfhfcgijedcepae",
            technologies: ["Chrome Extension", "JavaScript", "Developer Tools"],
            icon: "🔍"
        },
        {
            title: "POS System for Retail Billing",
            type: "PoC - Point of Sale System",
            description: "Designed intuitive UI/UX using React and Material-UI, creating wireframes and prototypes in Figma. Led the development of a proof-of-concept Point of Sale system for stores as a product of Fractal, focusing on streamlined billing processes. Integrated Google OAuth for secure user authentication. Developed the backend using Node.js with RESTful APIs. Utilized Google Firebase as the database for real-time data storage.",
            link: "https://v1-demo.lightworks-services.com/#/",
            technologies: ["React", "Material-UI", "Node.js", "Firebase", "Google OAuth", "Figma"],
            icon: "💳"
        },
        {
            title: "Indimitra.com",
            type: "B2B E-commerce Platform",
            description: "Contributed to the MVP of a self-hosted e-commerce website for small businesses, accessible globally. Supported the B2B Fractal plan, enabling businesses to build their own websites. Developed a platform with three interfaces for Users, Store Managers, and Delivery Partners, allowing users to order based on radius. Worked on database modeling using ERASER.AI. Used React JS, React Query, MUI, Fast API, Django, GraphQL, and Strawberry. Assisted in setting up AWS infrastructure for development, testing, and production.",
            link: "https://indimitra.com/",
            technologies: ["React", "Django", "FastAPI", "GraphQL", "AWS", "MUI", "React Query"],
            icon: "🛒"
        },
        {
            title: "QR Menu Scanner",
            type: "Restaurant Menu System",
            description: "QR menu scanner for restaurants as a product. A digital menu solution that allows customers to scan QR codes to view restaurant menus on their mobile devices, providing a contactless dining experience.",
            link: "https://scoressportsbar.menuscard.com/",
            technologies: ["QR Code", "Mobile Web", "Restaurant Tech"],
            icon: "📱"
        },
        {
            title: "GuestsMenu.com",
            type: "Event Management Platform",
            description: "Platform to host people at your places and collect the info. A solution for managing guest information and preferences for events and gatherings.",
            link: "https://www.guestsmenu.com/",
            technologies: ["Event Management", "Guest Management"],
            icon: "🎉"
        },
        {
            title: "More Projects",
            type: "Additional Work Portfolio",
            description: "There are more projects which are related to static websites, payment websites, ecommerce websites, booking websites, and various other customer products developed as per specific requirements. Each project is tailored to meet unique business needs and deliver optimal user experiences.",
            link: null,
            technologies: ["Static Websites", "Payment Systems", "E-commerce", "Booking Systems"],
            icon: "🚀",
            isMoreCard: true
        }
    ];

    return (
        <div 
            className='container-fluid min-vh-100' 
            style={{ 
                backgroundColor: "#0a192f",
                background: "linear-gradient(45deg, #0a192f, #020c1b)",
                paddingTop: "5rem",
                paddingBottom: "5rem"
            }} 
            ref={refer}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5 fade-in-on-scroll">
                        <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "1.6vmax" }}>
                            03. <small className='fw-bold' style={{ color: '#ccd6f6', fontSize: "2.2vmax" }}>Some Work&apos;s Ive Done</small>
                        </h5>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {projects.map((project, index) => (
                        <div className="col" key={index}>
                            <div 
                                className='card text-white h-100 project-card scale-in-on-scroll' 
                                style={{ 
                                    backgroundColor: "#112240",
                                    border: "1px solid rgba(100, 255, 218, 0.1)",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    animationDelay: `${index * 0.1}s`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.borderColor = "#64ffda";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                                }}
                            >
                                <div className="card-body d-flex flex-column">
                                    <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                                        {project.icon}
                                    </div>
                                    <h5 
                                        className="card-title mb-2" 
                                        style={{ color: "#64ffda" }}
                                    >
                                        {project.title}
                                    </h5>
                                    <p 
                                        className="text-muted mb-2" 
                                        style={{ 
                                            color: "#8892b0", 
                                            fontSize: "0.9rem",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        {project.type}
                                    </p>
                                    <p 
                                        className="card-text flex-grow-1" 
                                        style={{ 
                                            color: "#ccd6f6",
                                            fontSize: "0.95rem",
                                            lineHeight: "1.6"
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="mt-3 mb-3">
                                        <div className="d-flex flex-wrap gap-2">
                                            {project.technologies.slice(0, project.isMoreCard ? 4 : 3).map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="badge"
                                                    style={{ 
                                                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                                                        color: "#64ffda",
                                                        fontSize: "0.75rem",
                                                        padding: "0.25rem 0.5rem"
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {project.link ? (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn mt-auto" 
                                            style={{ 
                                                backgroundColor: "transparent",
                                                color: "#64ffda",
                                                border: "1px solid #64ffda",
                                                borderRadius: "4px",
                                                padding: "0.5rem 1rem",
                                                textDecoration: "none",
                                                display: "inline-block",
                                                width: "fit-content",
                                                transition: "all 0.3s ease"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }}
                                        >
                                            View Project →
                                        </a>
                                    ) : (
                                        <div 
                                            className="mt-auto" 
                                            style={{ 
                                                color: "#8892b0",
                                                fontSize: "0.9rem",
                                                fontStyle: "italic"
                                            }}
                                        >
                                            Contact for more details
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Works;