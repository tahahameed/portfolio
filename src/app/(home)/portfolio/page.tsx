import Link from "next/link";
import Image from "next/image";
import CRMImage from "../../../../public/CRM.png";
import SISImage from "../../../../public/SIS.png";
import CISImage from "../../../../public/CIS.png";
import SCPImage from "../../../../public/SCP.png";
import GBImage from "../../../../public/GB.png";
import Step2ComplianceImage from "../../../../public/Step2Compliance.png";
import SoftcakeImage from "../../../../public/Softcake.png";

export default function Portfolio () {
    return (
        <div id="education" className="education-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={CRMImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>CRM</h4>
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://desktopapi.hivepbx.com/swagger/" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    <p>Integration system which includes CovetrusCRM, Salesforce, Teledynamics, Google Calendar/Contacts, and Microsoft Graph APIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={GBImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>Education Management Information System</h4>
                            
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://emis.gilgitbaltistan.gov.pk" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    {/* <h3>Education Management Information System</h3> */}
                                    <p>This is used by the public schools all across Gilgit Baltistan, to self report data on registered teachers, students.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={SISImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>School Information System</h4>
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://sis.punjab.gov.pk/dashboard" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    <p>SIS (School Information System) is a software used by the public schools all across Punjab, to self report data on registered students, teachers and facilities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={CISImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>College Information System</h4>
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://cis.punjab.gov.pk" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    <p>CIS (College Information System) is a software used by the public college all across Punjab, to self report data on registered students, teachers and facilities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={Step2ComplianceImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>Step 2 Compliance</h4>
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://www.step2compliance.com/" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    <p>Contributed to an engine performance and compliance management system built with Laravel and MySQL.</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="portfolio-item">
                            <Image className="img-fluid" src={SoftcakeImage} layout="responsive" objectFit="cover"  alt="Image" />
                            <h4>Softcake</h4>
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <Link href="https://softcake.net/" target="_blank">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </Link>
                                    <p>This is company management system which includes their feeds, calendar, task management system, organization heirarchy and file management linked with Google Drive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}