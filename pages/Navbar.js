import { useState, useCallback, useEffect } from "react";

const Navbar = ({ executeScroll, refs }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light col-12' style={{ backgroundColor: "#0a192f" }}>
            <div className="container-fluid me-sm-3 ms-sm-3">
                <a to="/" className='navbar-brand text-light' href="#" onClick={() => {
                    executeScroll(refs.mainRef);
                    if (isOpen) setOpen(false);
                }}>< h5 style={{ color: "#64ffda" }}>AG</ h5></a>
                <button className="navbar-toggler" style={{ color: "#64ffda" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#64ffda" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <h5 className='fw-normal nav-link text-light' style={{ color: "#64ffda", fontSize: "14px" }} onClick={() => {
                                executeScroll(refs.aboutRef);
                            }}>
                                01. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>About</small>
                            </h5>
                        </li>
                        <li className="nav-item ms-2">
                            <h5 className='fw-normal nav-link text-light' style={{ color: "#64ffda", fontSize: "14px" }} onClick={() => {
                                executeScroll(refs.expRef);
                            }}>
                                02. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Experience</small>
                            </h5>
                        </li>
                        <li className="nav-item ms-2">
                            <h5 className='fw-normal nav-link text-light' style={{ color: "#64ffda", fontSize: "14px" }} onClick={() => {
                                executeScroll(refs.worksRef);
                            }}>
                                03. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Works</small>
                            </h5>
                        </li>
                        <li className="nav-item ms-2">

                            <h5 className='fw-normal nav-link text-light' style={{ color: "#64ffda", fontSize: "14px" }} onClick={() => {
                                executeScroll(refs.contactRef);
                            }}>
                                04. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Contact</small>
                            </h5>
                        </li>
                        <li className="nav-item ms-2">
                            <button className="btn btn-outline-light" style={{ color: "#64ffda" }} type="submit" onClick={() => {
                                window.open("./AG_Resume.pdf", "_blank");
                                setOpen(!isOpen);
                            }}>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;