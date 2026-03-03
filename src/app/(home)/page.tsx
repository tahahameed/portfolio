import Link from "next/link";
import Image from "next/image";
// import Dp from "../../../public/profile.jpg";
import Dp from "../../../public/profile-ghibli-white.png";

export default function About() {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2015;

    return (
        <>
            <div id="about" className="profile about-section contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title">
                                <h1>Taha Hameed</h1>
                                <h4>Fullstack Developer</h4>
                            </div>
                            <div className="about-info">
                                <p>
                                    Senior Full Stack Developer with {experienceYears} years of experience building scalable, integration-driven systems using Python (Django, FastAPI) and PHP (Laravel), React and Next.js. Experienced in secure OAuth integrations, background processing, payment workflows, and modern API architectures. <br /> 
                                    Proven track record delivering reliable SaaS and enterprise solutions for US and government clients. <br /> 
                                    Open to local and international remote opportunities.
                                </p>
                            </div>
                            <address>
                                {/* <div>
                                    <ul className="social list-inline">
                                        <li>
                                            <strong><i className="fa fa-envelope-o" aria-hidden="true"></i></strong>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>
                                        </li>
                                        <li>
                                            tahahameed1@gmail.com
                                        </li>
                                    </ul>
                                </div> */}
                                <div> 
                                    <ul className="social list-inline">
                                        <li>
                                            <strong><i className="fa fa-external-link" aria-hidden="true"></i></strong>
                                        </li>
                                        <li>
                                            <strong>Connect:</strong>
                                        </li>
                                        <li>
                                            <Link href="mailto:tahahameed1@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/in/taha-hameed-fastian/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="https://github.com/tahahameed" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="social list-inline">
                                        <li>
                                            <strong><i className="fa fa-phone" aria-hidden="true"></i></strong>
                                        </li>
                                        <li>
                                            <strong>Mobile:</strong>
                                        </li>
                                        <li>
                                            (+92)-334-4065557
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="social list-inline">
                                        <li>
                                            <strong><i className="fa fa-map-signs" aria-hidden="true"></i></strong>
                                        </li>
                                        <li>
                                            <strong>Address:</strong>
                                        </li>
                                        <li>
                                            Lahore, Pakistan
                                        </li>
                                    </ul>
                                </div>
                            </address>
                            <div className="button">
                                <Link href="Taha Hameed.pdf" target="_blank" className="btn btn-primary">Resume</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Image 
                                className="img-fluid" 
                                src={Dp} 
                                alt="Image" 
                                // width={175} 
                                // height={160}
                                
                                layout="responsive"
                                objectFit="cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}