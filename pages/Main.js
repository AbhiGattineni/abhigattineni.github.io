

const Main = () => {
    return (
        <div className='container-fluid pt-5 mt-5' style={{ backgroundColor: "#0a192f", height: "100%" }}>
            <div className='row mt-sm-5' style={{ marginLeft: "10%" }}>
                <h6 className='col-12 fs-12 mb-3' style={{ color: "#64ffda" }}>Hi, my name is</h6>
                <h1 className='col-12 mb-3 fw-bold' style={{ color: "#ccd6f6", fontSize: "5.2vmax" }}>Abhishek Gattineni.</h1>
                <h1 className='col-12 mb-4 fw-bold' style={{ color: "#8892b0", fontSize: "4.2vmax" }}>I build things for the Web & Mobile.</h1>
                <div className="mb-5">
                    <h6 className='col-sm-5' style={{ color: "#8892b0" }}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                        Currently, pursuing masters in Computer Science at California State University Long Beach.
                    </h6>
                </div>
                <button className="col-sm-3 col-6 btn btn-outline-light mb-5" style={{ color: "#64ffda" }} type="submit">Checkout my works !</button>

            </div>
        </div>
    );
}

export default Main;