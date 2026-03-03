import Image from "next/image";
import AxionImage from "../../../../public/Axion.jpg";
import PitbImage from "../../../../public/pitb.jpeg";
import RozeeImage from "../../../../public/rozee.png";
import ContriveImage from "../../../../public/contrive solutions.jpeg";
import LogicaImage from "../../../../public/logica.jpeg";

export default function Experience () {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2015;

    return (
    <>
        <div id="exprience" className="exprience-section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-info">
                            <h4>{experienceYears} Years Exprience</h4>
                            <p>I have leadership experience with over <strong>{experienceYears} years</strong> including a tenure as a <i>Team Lead</i>.</p>
                        </div>
                        <div className="exprience">
                            <div className="exprience-image">
                                <Image 
                                    className="img-fluid" 
                                    src={AxionImage} 
                                    alt="Image" 
                                    // width={175} 
                                    // height={160}
                                    layout="responsive"
                                    objectFit="cover" 
                                />
                            </div>
                            <div className="exprience-info">
                                <h3>Senior Backend Developer, Axion Communications</h3>
                                <h5>May 2025 - Present</h5>
                                <ul>
                                    <li>Implemented bidirectional integrations with Salesforce, Covetrus CRM, Google Calendar/Contacts, and Microsoft Graph APIs.</li>
                                    <li>Built OAuth2 authentication flows and token refresh mechanisms.</li>
                                    <li>Implemented delta synchronization logic to efficiently handle CRM data updates.</li>
                                    <li>Implemented webhooks using Celery for API operations</li>
                                    <li>Migrated legacy PHP modules to FastAPI.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <hr/>
                        
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
                                <h5>July, 2017 - May 2025</h5>
                                <ul>
                                    <li>Developed large-scale government applications for millions of users.</li>
                                    <li>Built RESTful APIs using Laravel and CodeIgniter.</li>
                                    <li>Implemented queue-based systems using RabbitMQ for background processing.</li>
                                    <li>Managed Linux-based production servers and handled deployments.</li>
                                    <li>Optimized database queries and indexing strategies for improved performance.</li>
                                </ul>
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
                                <ul>
                                    <li>Worked on high-traffic job portal platforms (Rozee.pk, Mihnati.com).</li>
                                    <li>Developed backend features in custom MVC framework.</li>
                                </ul>
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
                                <ul>
                                    <li>Led small development team delivering international client projects.</li>
                                    <li>Collaborated with an international team following structured task assignment and review workflows.</li>
                                    <li>Participated in peer code reviews to maintain quality and consistency.</li>
                                    <li>Integrated third-party APIs which include Google Drive, LinkedIn, QuickBooks, Stripe.</li>
                                </ul>
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
                                <ul>
                                    <li>Worked on internal shift management system.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}