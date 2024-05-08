import Image from "next/image";
import UniImage from "../../../../public/fast.jpg";
import CollegeImage from "../../../../public/college.jpeg";
import SchoolImage from "../../../../public/school.jpeg";

export default function Education () {
    return (
        <>
        <div id="education" className="education-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-info">
                            <h4>Educational Background</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> */}
                        </div>
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={UniImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>National University of Computer & Emerging Sciences (FAST-NU), Lahore</h3>
                                <h4>BS (Computer Science)</h4>
                                <h6>2014</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        
                        <hr/>
                        
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={CollegeImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Government College of Science Wahdat Road, Lahore</h3>
                                <h4>FSC (Pre-Engineering)</h4>
                                <h6>2010</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>

                        <hr/>

                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={SchoolImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Crescent Model Higher Secondary School, Lahore</h3>
                                <h4>Matric (Computer Science)</h4>
                                <h6>2008</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}