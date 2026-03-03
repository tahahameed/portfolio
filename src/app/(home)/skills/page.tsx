import Image from "next/image";
import PhpImage from "../../../../public/php.png";
import JqueryImage from "../../../../public/jquery.png";
import JavascriptImage from "../../../../public/javascript.png";
import PythonImage from "../../../../public/python.png";
import DjangoImage from "../../../../public/django.png";
import HtmlImage from "../../../../public/html.jpeg";
import ReactImage from "../../../../public/react.png";

import LaravelImage from "../../../../public/laravel.png";
import CodeigniterImage from "../../../../public/codeigniter.png";
import NextJsImage from "../../../../public/nextjs.png";

import PostgresImage from "../../../../public/postgresql.png";
import MysqlImage from "../../../../public/mysql.png";
import MssqlImage from "../../../../public/mssql.png";
import MongoImage from "../../../../public/mongodb.png";

import GitImage from "../../../../public/git.png";
import GitlabImage from "../../../../public/gitlab.png";
import TortoiseImage from "../../../../public/tortoisesvn.png";

import DockerImage from "../../../../public/docker.png";
import KubernetesImage from "../../../../public/kubernetes.png";

export default function Skills () {
    return (
        <>
            <div id="skill" className="skill-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <div className="text-info">
                                    <h4>Languages</h4>
                                </div>
                                <div className="progress-content row">
                                    <div className="col-md-12">
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={PhpImage} alt="PHP" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={PythonImage} alt="Python" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={JqueryImage} alt="Jquery" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={JavascriptImage} alt="Javascript" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={ReactImage} alt="React" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={HtmlImage} alt="Html" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <div className="text-info">
                                    <h4>Frameworks</h4>
                                </div>
                                <div className="progress-content row">
                                    <div className="col-md-12">
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={DjangoImage} alt="Django" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={LaravelImage} alt="Laravel" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={CodeigniterImage} alt="CodeIgniter" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={NextJsImage} alt="Next Js" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <div className="text-info">
                                    <h4>Databases</h4>
                                </div>
                                <div className="progress-content row">
                                    <div className="col-md-12">
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={PostgresImage} alt="PostgreSQL" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={MysqlImage} alt="MySQL" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={MssqlImage} alt="MsSQL" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={MongoImage} alt="Mongo DB" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <div className="text-info">
                                    <h4>Versioning</h4>
                                </div>
                                <div className="progress-content row">
                                    <div className="col-md-12">
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={GitImage} alt="Git" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={GitlabImage} alt="Gitlab" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={TortoiseImage} alt="Tortoise SVN" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <div className="text-info">
                                    <h4>Deployment</h4>
                                </div>
                                <div className="progress-content row">
                                    <div className="col-md-12">
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={DockerImage} alt="Docker" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="skill-image">
                                            <Image className="img-fluid" src={KubernetesImage} alt="Kubernetes" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}