

const Navbar = () => {
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light col-12' style={{ backgroundColor: "#0a192f" }}>
            <div className="container-fluid me-sm-3 ms-sm-3">
                <a to="/" className='navbar-brand text-light' href="#" >< h5 style={{ color: "#64ffda" }}>AG</ h5></a>
                <button className="navbar-toggler" style={{ color: "#64ffda" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#64ffda" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a to="/about" className="nav-link active text-light" href="#">
                                <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "14px" }}>
                                    01. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>About</small>
                                </h5></a>
                        </li>
                        <li className="nav-item ms-2">
                            <a to="/experience" className="nav-link text-light" href="#">
                                <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "14px" }}>
                                    02. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Experience</small>
                                </h5></a>
                        </li>
                        <li className="nav-item ms-2">
                            <a to="/contact" className="nav-link text-light" href="#">
                                <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "14px" }}>
                                    03. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Works</small>
                                </h5></a>
                        </li>
                        <li className="nav-item ms-2">
                            <a to="/contact" className="nav-link text-light" href="#">
                                <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "14px" }}>
                                    04. <small className='fw-normal' style={{ color: '#ccd6f6', fontSize: "1rem" }}>Contact</small>
                                </h5></a>
                        </li>
                        <li className="nav-item ms-2">
                            <button className="btn btn-outline-light" style={{ color: "#64ffda" }} type="submit">Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;