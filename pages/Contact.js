import { useRouter } from 'next/router'
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Contact = ({ refer }) => {
    const router = useRouter()
    return (
        <div className='container-fluid min-vh-100' style={{ backgroundColor: "#0a192f" }} ref={refer}>
            <div className="row">
                <div className="col-sm-4 offset-sm-4 mt-3">
                    <div className="text-center mb-2 mt-5">
                        <h6 style={{ color: "#64ffda" }}>
                            04.What&apos;s Next? </h6>
                    </div>
                    <div className="text-center">
                        <h1 className='fw-bold fs-1 mb-3' style={{ color: "#ccd6f6" }}>Get In Touch</h1>
                    </div>
                    <div className="text-center mb-4">
                        <h6 className='fs-6' style={{ color: "#8892b0" }}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
                            I’ll try my best to get back to you!
                        </h6>
                    </div>
                    <div className="text-center mb-5">
                        <button className="btn btn-outline-light" style={{ color: "#64ffda" }} type="submit" onClick={() => router.push('mailto:')}>Say Hello</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div><BsFacebook className='m-3 text-white' size={30} onClick={() =>
                            window.open(
                                "https://www.facebook.com/abhi.gattineni/",
                                "_blank"
                            )
                        } /></div>
                        <div><BsInstagram className='m-3 text-white' size={30} onClick={() =>
                            window.open(
                                "https://www.instagram.com/abhigattineni/",
                                "_blank"
                            )
                        } /></div>
                        <div><BsLinkedin className='m-3 text-white' size={30} onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/abhishek-gattineni-05937088/",
                                "_blank"
                            )
                        } /></div>
                    </div>
                    <div className="align-self-end text-center" style={{ color: "#a8b2d1" }}>
                        <h6 className='fs-6'>Design & Built by Abhi Gattineni</h6>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;