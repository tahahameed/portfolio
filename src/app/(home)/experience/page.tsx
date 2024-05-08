import Image from "next/image";
import PitbImage from "../../../../public/pitb.jpeg";
import RozeeImage from "../../../../public/rozee.png";
import ContriveImage from "../../../../public/contrive solutions.jpeg";
import LogicaImage from "../../../../public/logica.jpeg";

export default function Experience () {
    return (
    <>
        <div id="exprience" className="exprience-section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-info">
                            <h4>9+ Years Exprience</h4>
                            <p>I have leadership experience with over <strong>9 years</strong> including a tenure as a <i>Team Lead</i>.</p>
                        </div>
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={PitbImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Senior Software Engineer, Punjab Information Technology Board (PITB)</h3>
                                <h5>July, 2017 - Present</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>

                        <hr/>
                        
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={RozeeImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Software Engineer, Naseeb Networks (Rozee.pk)</h3>
                                <h5>Aug, 2016 - July, 2017</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={ContriveImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Software Engineer, Contrive Solutions</h3>
                                <h5>June, 2015 - Aug, 2016</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={LogicaImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Web/ Android Developer, Logica IT</h3>
                                <h5>Feb, 2015 - June, 2015</h5>
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