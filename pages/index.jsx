import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences } from '../profile';

const Index = () => (
    <Layout>
        {/* Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card car-body bg-dark text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/ryan-ray-profile2.jpeg" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Rayn Ray</h1>
                            <h3>FullStack Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic accusamus fugiat sequi ipsa necessitatibus quisquam, quaerat vel? Ducimus quod unde perspiciatis numquam sunt nesciunt, placeat adipisci consectetur iusto minima.</p>
                            <Link href={ '/hireMe' }>
                                <a>Hire Me</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second Section */}
        <div className="row py-3">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map((skill, idx) => (
                                <div className="my-3" key={ idx }>
                                    <h5>{ skill.skill }</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: skill.percentage+'%' }}> </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map((experience, idx) => (
                                    <li key={ idx }>
                                        <h3>{ experience.title }</h3>
                                        <h5>{ experience.from} - { experience.to ? experience.to : 'Current'}</h5>
                                        <p>{ experience.description }</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;