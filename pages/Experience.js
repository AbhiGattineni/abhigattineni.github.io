


const Experience = () => {
    return (
        <div className='container-fluid min-vh-100' style={{ backgroundColor: "#0a192f" }}>
            <div className="row ms-sm-5 me-sm-5">
                <div className="col-12 mt-5">
                    <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "1.6vmax" }}>
                        02. <small className='fw-bold' style={{ color: '#ccd6f6', fontSize: "2.2vmax" }}>Experience</small>
                    </h5>
                </div>
                <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item" style={{ backgroundColor: "#112240", color: "#8892b0" }}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
                            <button className="accordion-button " type="button" style={{ backgroundColor: "#112240", color: "#64ffda" }} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                CSULB- California State University Long Beach
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show mt-2" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                                        <img src="csulb.jfif" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mt-2" style={{ backgroundColor: "#112240", color: "#8892b0" }}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" style={{ backgroundColor: "#112240", color: "#64ffda" }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Cyient Ltd
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse mt-2" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                                        <img src="cyient.png" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mt-2" style={{ backgroundColor: "#112240", color: "#8892b0" }} >
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" style={{ backgroundColor: "#112240", color: "#64ffda" }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                HTC- Hyderabad Trekking Company
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse mt-2" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                                        <img src="htc.png" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;