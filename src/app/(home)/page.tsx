import Link from "next/link";
import Image from "next/image";
import Dp from "../../../public/profile.jpg";

export default function About() {
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
                                <p>I have a diverse skill set and leadership experience with over 8 years of experience, including a
                                tenure as a Team Lead. My expertise extends beyond coding, encompassing server
                                management, code integration, and deployment on Linux servers. I have also implemented
                                pipelines to streamline development processes, enhancing efficiency and productivity. I am
                                passionate about staying current with emerging technologies and have learned Next.js, Python
                                and Generative AI. </p>
                            </div>
                            <address>
                                <div>
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
                                        Gulshan-e-Ravi, Lahore, Pakistan
                                        </li>
                                    </ul>
                                </div>
                                <div> 
                                    <ul className="social list-inline">
                                        <li>
                                            <strong><i className="fa fa-external-link" aria-hidden="true"></i></strong>
                                        </li>
                                        <li>
                                            <strong>Connect:</strong>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/in/taha-hameed-97a8775a/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="https://github.com/tahahameed" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </address>
                            <div className="button">
                                <Link href="Taha Hameed.pdf" target="_blank" className="btn btn-primary">Download Resume</Link>
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