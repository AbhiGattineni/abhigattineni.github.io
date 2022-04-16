
import Image from 'next/image';

const Works = () => {
    return (
        <div className='container-fluid min-vh-100' style={{ backgroundColor: "#0a192f" }}>
            <div className="row ms-sm-5 me-sm-5">
                <div className="col-12 mt-5">
                    <h5 className='fw-normal' style={{ color: "#64ffda", fontSize: "1.6vmax" }}>
                        03. <small className='fw-bold' style={{ color: '#ccd6f6', fontSize: "2.2vmax" }}>Some Work`&apos;`s Ive Done</small>
                    </h5>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                            <img src="/csulb.jfif" className="card-img-top" alt="..." layout='fill' />
                            <div className="card-body">
                                <h5 className="card-title">CSULB</h5>
                                <p className="card-text">Cal State Long Beach</p>
                                <a href="#" className="btn" style={{ backgroundColor: "#64ffda" }}>Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                            <img src="/wheelz4wash.png" className="card-img-top" alt="..." layout='fill' />
                            <div className="card-body">
                                <h5 className="card-title">Wheelz4Wash</h5>
                                <p className="card-text">Startup made by 6 friends</p>
                                <a href="#" className="btn" style={{ backgroundColor: "#64ffda" }}>Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                            <img src="/htc.png" className="card-img-top" alt="..." layout='fill' />
                            <div className="card-body">
                                <h5 className="card-title">HTC</h5>
                                <p className="card-text">Operations Head</p>
                                <a href="#" className="btn" style={{ backgroundColor: "#64ffda" }}>Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card text-white' style={{ backgroundColor: "#112240" }}>
                            <img src="/cyient.png" className="card-img-top" alt="..." layout='fill' />
                            <div className="card-body">
                                <h5 className="card-title">Cyient Ltd</h5>
                                <p className="card-text">My first Company</p>
                                <a href="#" className="btn" style={{ backgroundColor: "#64ffda" }}>Know More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Works;