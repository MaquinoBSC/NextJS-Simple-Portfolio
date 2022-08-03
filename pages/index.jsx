import Link from "next/link";
import Layout from "../components/Layout";

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
    </Layout>
)

export default Index;